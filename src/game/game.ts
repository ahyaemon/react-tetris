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

interface CurrentMino {
    mino: Mino,
    position: Position
}

export type GameState = {
    value: number,
    currentMino: CurrentMino,
    rows: Row[]
}

const initialRowsArray = Array(20).fill(0).map(_ => Array(10).fill(Color.None))
initialRowsArray[18][2] = Color.Red
initialRowsArray[19][1] = Color.Red
initialRowsArray[19][2] = Color.Red
initialRowsArray[19][3] = Color.Red

export const initialGameState: GameState = {
    value: 1,
    currentMino: {
        mino: Mino.J,
        position: { row: 0, col: 0 }
    },
    rows: initialRowsArray
}

export enum Key {
    Up,
    Right,
    Down,
    Left,
}

export function input(gameState: GameState, key: Key): GameState {
    if (key === Key.Up) {
        return {
            ...gameState,
            value: gameState.value + 10
        }
    }
    return gameState
}
