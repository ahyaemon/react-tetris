import {Color, Mino, minoFactory} from "./mino";

type Position = {
    row: number,
    col: number,
}

export type Cell = Color

type Row = Cell[]

type Rotation = 0 | 90 | 180 | 270

interface CurrentMino {
    mino: Mino,
    position: Position,
    rotation: Rotation
}

export type GameState = {
    rows: Row[]
}

export enum Command {
    Up,
    Right,
    Down,
    Left,
}

export class Game {

    private static ncol = 10
    private static nrow = 20

    constructor(
        private currentMino: CurrentMino,
        private rows: Row[],
    ) {}

    static create(): Game {
        const rows = Array(this.nrow)
            .fill(0)
            .map(_ => Array(this.ncol).fill(Color.None))
        const currentMino: CurrentMino = {
            mino: minoFactory.j(),
            position: { row: 0, col: 3 },
            rotation: 0
        }

        return new Game(currentMino, rows)
    }

    get state(): GameState {
        const rows = this.rows.map(row => row.map(cell => cell))
        this.currentMino.mino.shape.forEach((row, irow) => {
            row.forEach((exists, icol) => {
                if (exists) {
                    rows[irow + this.currentMino.position.row][icol + this.currentMino.position.col] = this.currentMino.mino.color
                }
            })
        })
        return { rows }
    }

    public input(command: Command): GameState {
        if (command === Command.Up) {
            // mino を一番下まで落とす
            this.drop()

            // rows を state().rows に置き換え
            this.rows = this.state.rows

            // 次のミノを表示
            this.currentMino = {
                mino: minoFactory.j(),
                position: { row: 0, col: 3 },
                rotation: 0
            }
        } else if (command === Command.Right) {
            this.moveRight()
        } else if (command === Command.Down) {
            this.moveDown()
        } else if (command === Command.Left) {
            this.moveLeft()
        }
        return this.state
    }

    private moveRight() {
        const nextCol = this.currentMino.position.col + 1
        if (nextCol + this.currentMino.mino.rightPosition() < Game.ncol) {
            this.currentMino.position.col = nextCol
        }
    }

    private moveLeft() {
        const nextCol = this.currentMino.position.col - 1
        if (nextCol + this.currentMino.mino.leftPosition() >= 0) {
            this.currentMino.position.col = nextCol
        }
    }

    private moveDown() {
        const nextRow = this.currentMino.position.row + 1
        if (nextRow + this.currentMino.mino.bottomPosition() < Game.nrow) {
            this.currentMino.position.row = nextRow
        }
    }

    private drop() {
        while (true) {
            const nextRow = this.currentMino.position.row + 1
            if (nextRow + this.currentMino.mino.bottomPosition() < Game.nrow) {
                this.currentMino.position.row = nextRow
            } else {
                break
            }
        }
    }

    private collided(): boolean {
        // TODO
        const cellPositions = this.currentMino.mino.shape
        return false
    }
}
