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
            // TODO this.moveRight を currentMino に持たせる
            return this.updateCurrentMino(this.moveRight())
        } else if (command === Command.Down) {
            return this.updateCurrentMino(this.moveDown())
        } else if (command === Command.Left) {
            return this.updateCurrentMino(this.moveLeft())
        } else if (command === Command.RotationLeft) {
            return this.updateCurrentMino(this.currentMino.rotationLeft())
        } else if (command === Command.RotationRight) {
            return this.updateCurrentMino(this.currentMino.rotationRight())
        } else {
            throw Error("no command found")
        }
    }

    private updateCurrentMino(currentMino: CurrentMino): Game {
        return new Game(currentMino, this.rows, this.nextMinos, this.random)
    }

    private moveRight(): CurrentMino {
        const nextMino = this.currentMino.moveRight()

        if (nextMino.rightCol() >= Game.ncol) {
            return this.currentMino
        }

        if (nextMino.collided(this.rows)) {
            return this.currentMino
        }

        return nextMino
    }

    private moveLeft(): CurrentMino {
        const nextMino = this.currentMino.moveLeft()

        if (nextMino.leftCol() < 0) {
            return this.currentMino
        }

        if(nextMino.collided(this.rows)) {
            return this.currentMino
        }

        return nextMino
    }

    private moveDown(): CurrentMino {
        const nextMino = this.currentMino.moveDown()

        if (nextMino.bottomRow() >= Game.nrow) {
            return this.currentMino
        }

        if(nextMino.collided(this.rows)) {
            return this.currentMino
        }

        return nextMino
    }

    private drop(): CurrentMino {
        let m = this.currentMino.copy()
        while (true) {
            const nextMino = m.moveDown()

            if (nextMino.bottomRow() >= Game.nrow) {
                break
            }

            if(nextMino.collided(this.rows)) {
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
