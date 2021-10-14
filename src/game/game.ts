import {Direction, Mino, minoFactory} from "./mino";
import {Color, createEmptyRow, isFilled, Row, toGhost} from "./color";
import {Command} from "./command";
import {CurrentMino} from "./CurrentMino";
import {Random} from "./random";

export type GameState = {
    rows: Row[]
}

export class Game {

    private static ncol = 10
    private static nrow = 20

    constructor(
        private currentMino: CurrentMino,
        private rows: Row[],
        // TODO MinoPool 型にする
        private nextMinos: Mino[],
        // TODO 一手戻るをやった時もランダムで生成される値が固定されるようにする
        // random.next() が副作用を持たないように？
        private random: Random
    ) {}

    static create(): Game {
        const random = new Random(Math.random() * 1000000)
        const rows = Array(this.nrow)
            .fill(0)
            .map(_ => Array(this.ncol).fill(Color.None))
        const minoSets = minoFactory.createMinoSets(random.nextRandom())
        const currentMino = new CurrentMino(minoSets[0], { row: 0, col: 3 }, Direction.A)
        const nextMinos = minoSets.slice(1, minoSets.length)

        return new Game(currentMino, rows, nextMinos, random)
    }

    get state(): GameState {
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

        return { rows }
    }

    public input(command: Command): Game {
        if (command === Command.Up) {
            // mino を一番下まで落とす
            const droppedMino = this.drop()
            const newGame = new Game(droppedMino, this.rows, this.nextMinos, this.random)

            // rows を state().rows に置き換え（接地）
            const rows = newGame.state.rows

            // 揃ったラインを消す
            const clearedRows = this.clearRows(rows, Game.ncol)

            // 次のミノに切り替え
            const currentMino = new CurrentMino(this.nextMinos[0], { row: 0, col: 3 }, Direction.A)
            const nextMinos = (this.nextMinos.length <= 5) ?
                [...this.nextMinos.slice(1, this.nextMinos.length), ...minoFactory.createMinoSets(this.random.nextRandom())] :
                this.nextMinos.slice(1, this.nextMinos.length)
            return new Game(currentMino, clearedRows, nextMinos, this.random)
        } else if (command === Command.Right) {
            return this.updateCurrentMino(this.moveRight())
        } else if (command === Command.Down) {
            return this.updateCurrentMino(this.moveDown())
        } else if (command === Command.Left) {
            return this.updateCurrentMino(this.moveLeft())
        } else if (command === Command.RotationRight) {
            return this.updateCurrentMino(this.rotationRight())
        } else if (command === Command.RotationLeft) {
            return this.updateCurrentMino(this.currentMino.rotationLeft())
        } else {
            throw Error("no command found")
        }
    }

    private updateCurrentMino(currentMino: CurrentMino): Game {
        return new Game(currentMino, this.rows, this.nextMinos, this.random)
    }

    private rotationRight(): CurrentMino {
        // TODO SRS の導入
        // let tmpMino = this.currentMino.rotationRight()
        return this.currentMino.rotationRight()
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
        const clearingAmount = rows.filter(row => isFilled(row)).length
        if (clearingAmount === 0) {
            return rows
        }

        const remainedRows = rows.filter(row => !isFilled(row))
        const emptyRows = Array(clearingAmount).fill(0).map(_ => createEmptyRow(ncol))
        return [...emptyRows, ...remainedRows]
    }
}
