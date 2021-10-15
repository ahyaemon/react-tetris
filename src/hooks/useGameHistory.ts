import {Game} from "../game/game";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {gameHistory, historySizeSelector} from "../gameState";

type GameHistoryUpdater = {
    updateRecentlyGame: (f: (game: Game) => Game) => void
    addGame: (f: (game: Game) => Game) => void
    back: () => void
    historySize: number
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
        },
        historySize: useRecoilValue(historySizeSelector)
    }
}
