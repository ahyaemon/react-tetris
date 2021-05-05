export enum Mino {
    I,
    O,
    T,
    S,
    Z,
    L,
    J,
}

type Position = {
    row: number,
    col: number,
}

export enum Color {
    None = 'none',
    LightBlue = 'lightBlue',
    Yellow = 'yellow',
    Purple = 'purple',
    Green = 'green',
    Red = 'red',
    Orange = 'orange',
    Blue = 'blue',
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
    value: number,
    currentMino: CurrentMino,
    rows: Row[]
}

export enum Command {
    Up,
    Right,
    Down,
    Left,
}

export class Game {
    constructor(
        private currentMino: CurrentMino,
        private rows: Row[],
        private value: number
    ) {}

    static create(): Game {
        const rows = Array(20).fill(0).map(_ => Array(10).fill(Color.None))
        rows[18][2] = Color.Red
        rows[19][1] = Color.Red
        rows[19][2] = Color.Red
        rows[19][3] = Color.Red

        const currentMino: CurrentMino = {
            mino: Mino.J,
            position: { row: 0, col: 0 },
            rotation: 0
        }

        return new Game(currentMino, rows, 1)
    }

    get state(): GameState {
        return {
            currentMino: this.currentMino,
            rows: this.rows,
            value: this.value,
        }
    }

    public input(command: Command): GameState {
        if (command === Command.Up) {
            this.value += 10
        } else if (command === Command.Right) {
            this.value += 1
        } else if (command === Command.Down) {
            this.value -= 10
        } else if (command === Command.Left) {
            this.value -= 1
        }
        return this.state
    }
}
