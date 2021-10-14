import {Game} from "../game/game";
import {useSetRecoilState} from "recoil";
import {gameHistory} from "../gameState";

type GameHistoryUpdater = {
    updateRecentlyGame: (f: (game: Game) => Game) => void
    addGame: (f: (game: Game) => Game) => void
    back: () => void
}

export function useGameHistory(): GameHistoryUpdater {
    const setGameHistory = useSetRecoilState(gameHistory)

    return {
        updateRecentlyGame: f => {
            setGameHistory(gameHistory => {
                const newGame = f(gameHistory[0])
                return [newGame, ...gameHistory.slice(1, gameHistory.length)]
            })
        },
        addGame: f => {
            setGameHistory( gameHistory => {
                const newGame = f(gameHistory[0])
                return [newGame, ...gameHistory]
            })
        },
        back: () => {
            setGameHistory( gameHistory => {
                return gameHistory.slice(1, gameHistory.length)
            })
        }
    }
}
