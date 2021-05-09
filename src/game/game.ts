import {Color, Mino, minoFactory} from "./mino";
import {Position} from "./potision";

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
        this.currentMino.mino.shape.forEach(position => {
            rows[this.currentMino.position.row + position.row][this.currentMino.position.col + position.col] = this.currentMino.mino.color
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
                mino: minoFactory.random(),
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
        const nextPosition: Position = {
            row: this.currentMino.position.row,
            col: this.currentMino.position.col + 1,
        }
        if (
            (nextPosition.col + this.currentMino.mino.rightCol() < Game.ncol) &&
            (!this.collided(nextPosition))
        ) {
            this.currentMino.position = nextPosition
        }
    }

    private moveLeft() {
        const nextPosition: Position = {
            row: this.currentMino.position.row,
            col: this.currentMino.position.col - 1,
        }
        if (
            (nextPosition.col + this.currentMino.mino.leftCol() >= 0) &&
            (!this.collided(nextPosition))
        )
        {
            this.currentMino.position = nextPosition
        }
    }

    private moveDown() {
        const nextPosition: Position = {
            row: this.currentMino.position.row + 1,
            col: this.currentMino.position.col,
        }
        if (
            (nextPosition.row + this.currentMino.mino.bottomRow() < Game.nrow) &&
            (!this.collided(nextPosition))
        ) {
            this.currentMino.position = nextPosition
        }
    }

    private drop() {
        while (true) {
            const nextPosition: Position = {
                row: this.currentMino.position.row + 1,
                col: this.currentMino.position.col
            }
            if (
                (nextPosition.row + this.currentMino.mino.bottomRow() < Game.nrow) &&
                (!this.collided(nextPosition))
            ) {
                this.currentMino.position = nextPosition
            } else {
                break
            }
        }
    }

    private collided(position: Position): boolean {
        return this.currentMino.mino.shape.map(p => {
            return {
                row: position.row + p.row,
                col: position.col + p.col,
            }
        }).find(p => {
            return this.rows[p.row][p.col] !== Color.None
        }) !== undefined
    }
}
