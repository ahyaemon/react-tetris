export type GameState = {
    value: number
}

export const initialGameState: GameState = {
    value: 1,
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

export function setValue(gameState: GameState, value: number) : GameState {
    return { ...gameState, value }
}
