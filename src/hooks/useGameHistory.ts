import {Game} from "../game/game";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {GameStore} from "../stores/GameStore";

type GameHistoryUpdater = {
    updateRecentlyGame: (f: (game: Game) => Game) => void
    addGame: (f: (game: Game) => Game) => void
    back: () => void
    historySize: number,
    newGame: () => void,
    retry: () => void,
}

export function useGameHistory(gameStore: GameStore): GameHistoryUpdater {
    const setGameHistory = useSetRecoilState(gameStore.gameHistory)
    const historySize = useRecoilValue(gameStore.historySize)

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
        historySize,
        newGame: () => {
            setGameHistory([Game.create(Math.random() * 1000000)])
        },
        retry: () => {
            setGameHistory(gameHistory => {
                return [gameHistory[0].retry()]
            })
        }
    }
}
