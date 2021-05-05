enum MinoType {
    I,
    O,
    T,
    S,
    Z,
    L,
    J,
}

export type Mino = {
    minoType: MinoType,
    shape: boolean[][]
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
    ) {}

    static create(): Game {
        const rows = Array(20).fill(0).map(_ => Array(10).fill(Color.None))
        const currentMino: CurrentMino = {
            mino: {
                minoType: MinoType.J,
                shape: [[]]
            },
            position: { row: 0, col: 0 },
            rotation: 0
        }

        return new Game(currentMino, rows)
    }

    get state(): GameState {
        return {
            rows: this.rows,
        }
    }

    public input(command: Command): GameState {
        if (command === Command.Up) {
            console.log('up')
        } else if (command === Command.Right) {
            console.log('right')
        } else if (command === Command.Down) {
            console.log('down')
        } else if (command === Command.Left) {
            console.log('left')
        }
        return this.state
    }
}
