import {createContext} from "react";

type GameState = {
    value: number
}

export const initialGameState: GameState = {
    value: 1,
}

type GameContextType = {
    gameState: GameState
    setGameState: (gameState: GameState) => void
}

const GameContext = createContext({} as GameContextType)

export default GameContext
