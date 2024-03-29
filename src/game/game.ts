import {Mino} from "./mino";
import {Cell, createEmptyRow, isFilled, Row, toGhost} from "./cell";
import {Command} from "./command";
import {CurrentMino} from "./CurrentMino";
import {Position} from "./potision";
import {RenCounter} from "./RenCounter";
import {Seed} from "./seed";
import {NextMinosHolder} from "./NextMinosHolder";

export type Board = Row[]

export class Game {

    private static ncol = 10
    private static nrow = 20

    constructor(
        private readonly currentMino: CurrentMino,
        readonly rows: Row[],
        readonly heldMino: Mino | null,
        readonly nextMinosHolder: NextMinosHolder,
        readonly clearedRowCount: number,
        private readonly renCounter: RenCounter,
    ) {}

    static create(seed: Seed): Game {
        const rows = Array(this.nrow)
            .fill(0)
            .map(_ => Array(this.ncol).fill(Cell.None))
        const nextMinosHolder = NextMinosHolder.create(seed)
        const [firstMino, restHolder] = nextMinosHolder.pop()
        const currentMino = CurrentMino.create(firstMino)
        const renCounter = RenCounter.create()

        return new Game(currentMino, rows, null, restHolder, 0, renCounter)
    }

    // FIXME この変換ロジックはここに入れるべき？
    // 表示用に color をセットするだけだから表示側？
    get board(): Board {
        // 地形をコピー
        const rows = this.rows.map(row => row.map(cell => cell))

        // ゴーストブロックの表示
        const ghost = this.drop()
        ghost.getShape().positions.forEach(position => {
            rows[ghost.position.row + position.row][ghost.position.col + position.col] = toGhost(this.currentMino.mino.color)
        })

        // 現在のミノを表示
        this.currentMino.getShape().positions.forEach(position => {
            rows[this.currentMino.position.row + position.row][this.currentMino.position.col + position.col] = this.currentMino.mino.color
        })

        return rows
    }

    get minoDroppedBoard(): Board {
        const rows = this.rows.map(row => row.map(cell => cell))
        const ghost = this.drop()
        ghost.getShape().positions.forEach(position => {
            rows[ghost.position.row + position.row][ghost.position.col + position.col] = this.currentMino.mino.color
        })
        return rows
    }

    public input(command: Command): Game {
        if (command === Command.Up) {
            // mino を一番下まで落とす
            const droppedMino = this.drop()
            const newGame = new Game(
                droppedMino,
                this.rows,
                this.heldMino,
                this.nextMinosHolder,
                this.clearedRowCount,
                this.renCounter,
            )

            // rows を board().rows に置き換え（接地）
            const rows = newGame.board

            // 揃ったラインを消す
            const clearedRows = this.clearRows(rows, Game.ncol)

            // REN と LINE
            const clearingAmount = this.getClearingAmount(rows)
            const renCounter = this.renCounter.next(clearingAmount !== 0)

            // 次のミノに切り替え
            const [first, restHolder] = this.nextMinosHolder.pop()
            const currentMino = CurrentMino.create(first)

            return new Game(
                currentMino,
                clearedRows,
                this.heldMino,
                restHolder,
                this.clearedRowCount + this.getClearingAmount(rows),
                renCounter,
            )
        } else if (command === Command.Right) {
            return this.updateCurrentMino(this.moveRight())
        } else if (command === Command.Down) {
            return this.updateCurrentMino(this.moveDown())
        } else if (command === Command.Left) {
            return this.updateCurrentMino(this.moveLeft())
        } else if (command === Command.RotationRight) {
            return this.updateCurrentMino(this.rotationRight())
        } else if (command === Command.RotationLeft) {
            return this.updateCurrentMino(this.rotationLeft())
        } else if (command === Command.Hold) {
            return this.hold()
        } else {
            throw Error("no command found")
        }
    }

    public hold(): Game {
        if (this.heldMino === null) {
            const heldMino = this.currentMino.mino
            const [first, restHolder] = this.nextMinosHolder.pop()
            const currentMino = CurrentMino.create(first)
            return new Game(
                currentMino,
                this.rows,
                heldMino,
                restHolder,
                this.clearedRowCount,
                this.renCounter,
            )
        } else {
            const heldMino = this.currentMino.mino
            const currentMino = CurrentMino.create(this.heldMino)
            return new Game(
                currentMino,
                this.rows,
                heldMino,
                this.nextMinosHolder,
                this.clearedRowCount,
                this.renCounter,
            )
        }
    }

    private updateCurrentMino(currentMino: CurrentMino): Game {
        return new Game(
            currentMino,
            this.rows,
            this.heldMino,
            this.nextMinosHolder,
            this.clearedRowCount,
            this.renCounter,
        )
    }

    private rotationRight(): CurrentMino {
        let m = this.currentMino.rotationRight()
        if (!this.collided(m)) {
            return m
        }

        if (this.currentMino.isIMino) {
            if (this.currentMino.isADirection) {
                // A -> B
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: -1 },
                        { row: 0, col: 3 },
                        { row: 1, col: -3 },
                        { row: -3, col: 3 },
                    ]) || this.currentMino
            } else if (this.currentMino.isBDirection) {
                // B -> C
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: -1 },
                        { row: 0, col: 3 },
                        { row: -3, col: 2 },
                        { row: 3, col: 3 },
                    ]) || this.currentMino
            } else if (this.currentMino.isCDirection) {
                // C -> D
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: 2 },
                        { row: 0, col: -3 },
                        { row: -1, col: 3 },
                        { row: 3, col: -3 },
                    ]) || this.currentMino
            } else {
                // D -> A
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: -2 },
                        { row: 0, col: 3 },
                        { row: 2, col: 0 },
                        { row: -3, col: -3 },
                    ]) || this.currentMino
            }
        } else {
            if (this.currentMino.isADirection) {
                // A -> B
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: -1 },
                        { row: -1, col: 0 },
                        { row: 3, col: 1 },
                        { row: 0, col: -1 },
                    ]) || this.currentMino
            } else if (this.currentMino.isBDirection) {
                // B -> C
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: 1 },
                        { row: 1, col: 0 },
                        { row: -3, col: -1 },
                        { row: 0, col: 1 },
                    ]) || this.currentMino
            } else if (this.currentMino.isCDirection) {
                // C -> D
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: 1 },
                        { row: -1, col: 0 },
                        { row: 3, col: -1 },
                        { row: 0, col: 1 },
                    ]) || this.currentMino
            } else {
                // D -> A
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: -1 },
                        { row: 1, col: 0 },
                        { row: -3, col: 1 },
                        { row: 0, col: -1 },
                    ]) || this.currentMino
            }
        }
    }

    private rotationLeft(): CurrentMino {
        let m = this.currentMino.rotationLeft()
        if (!this.collided(m)) {
            return m
        }

        if (this.currentMino.isIMino) {
            if (this.currentMino.isADirection) {
                // A -> D
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: -1 },
                        { row: 0, col: 3 },
                        { row: -2, col: -3 },
                        { row: 3, col: 3 },
                    ]) || this.currentMino
            } else if (this.currentMino.isBDirection) {
                // B -> A
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: 2 },
                        { row: 0, col: -3 },
                        { row: -1, col: 3 },
                        { row: -3, col: 3 },
                    ]) || this.currentMino
            } else if (this.currentMino.isCDirection) {
                // C -> B
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: 1 },
                        { row: 0, col: -3 },
                        { row: 2, col: 3 },
                        { row: -3, col: -3 },
                    ]) || this.currentMino
            } else {
                // D -> C
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: 1 },
                        { row: 0, col: -3 },
                        { row: 0, col: 1 },
                        { row: 3, col: 3 },
                    ]) || this.currentMino
            }
        } else {
            if (this.currentMino.isADirection) {
                // A -> D
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: 1 },
                        { row: -1, col: 0 },
                        { row: 3, col: -1 },
                        { row: 0, col: 1 },
                    ]) || this.currentMino
            } else if (this.currentMino.isBDirection) {
                // B -> A
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: 1 },
                        { row: 1, col: 0 },
                        { row: 3, col: -1 },
                        { row: 0, col: 1 },
                    ]) || this.currentMino
            } else if (this.currentMino.isCDirection) {
                // C -> B
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: -1 },
                        { row: -1, col: 0 },
                        { row: 3, col: 1 },
                        { row: 0, col: -1 },
                    ]) || this.currentMino
            } else {
                // D -> C
                return this.moveHitRelations(
                    m,
                    [
                        { row: 0, col: -1 },
                        { row: 1, col: 0 },
                        { row: -3, col: 1 },
                        { row: 0, col: -1 },
                    ]) || this.currentMino
            }
        }
    }

    /**
     * 回転して行き先がない場合は null
     * @param currentMino
     * @param positions
     * @private
     */
    private moveHitRelations(currentMino: CurrentMino, positions: Position[]): CurrentMino | null {
        let c = currentMino.copy()
        for (const p of positions) {
            c = c.moveRelational(p)
            if (!this.collided(c)) {
                return c
            }
        }
        return null
    }

    private moveRight(): CurrentMino {
        const nextMino = this.currentMino.moveRight()
        if (this.collided(nextMino)) {
            return this.currentMino
        }
        return nextMino
    }

    private moveLeft(): CurrentMino {
        const nextMino = this.currentMino.moveLeft()
        if (this.collided(nextMino)) {
            return this.currentMino
        }
        return nextMino
    }

    private moveDown(): CurrentMino {
        const nextMino = this.currentMino.moveDown()
        if (this.collided(nextMino)) {
            return this.currentMino
        }
        return nextMino
    }

    private collided(mino: CurrentMino): boolean {
        if (mino.rightCol() >= Game.ncol) {
            return true
        }

        if (mino.leftCol() < 0) {
            return true
        }

        if (mino.bottomRow() >= Game.nrow) {
            return true
        }

        if(mino.collided(this.rows)) {
            return true
        }

        return false
    }

    private drop(): CurrentMino {
        let m = this.currentMino.copy()
        while (true) {
            const nextMino = m.moveDown()

            if (this.collided(nextMino)) {
                break
            }
            m = nextMino
        }
        return m
    }

    private clearRows(rows: Row[], ncol: number): Row[] {
        const clearingAmount = this.getClearingAmount(rows)
        if (clearingAmount === 0) {
            return rows
        }

        const remainedRows = rows.filter(row => !isFilled(row))
        const emptyRows = Array(clearingAmount).fill(0).map(_ => createEmptyRow(ncol))
        return [...emptyRows, ...remainedRows]
    }

    private getClearingAmount(rows: Row[]): number {
      return rows.filter(row => isFilled(row)).length
    }

    public renCount(): number {
        return this.renCounter.count
    }

    get nextMinos(): Mino[] {
        return this.nextMinosHolder.minos
    }

    get seed(): Seed {
        return this.nextMinosHolder.seed
    }
}
