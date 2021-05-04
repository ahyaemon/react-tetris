import {createContext} from "react";
import {GameState} from "./game/game";


type GameContextType = {
    gameState: GameState
    setGameState: (gameState: GameState) => void
}

const GameContext = createContext({} as GameContextType)

export default GameContext
