import {Game} from "../game/game";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {GameStore} from "../stores/GameStore";
import {Row} from "../game/color";

type GameHistoryUpdater = {
    updateRecentlyGame: (f: (game: Game) => Game) => void
    addGame: (f: (game: Game) => Game) => void
    back: () => void
    historySize: number,
    newGame: () => void,
    retry: () => void,
    rows: Row[],
}

export function useGameHistory(gameStore: GameStore): GameHistoryUpdater {
    const setGameHistory = useSetRecoilState(gameStore.gameHistory)
    const historySize = useRecoilValue(gameStore.historySize)
    const gameHistory = useRecoilValue(gameStore.gameHistory)

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
                return [gameHistory[gameHistory.length - 1]]
            })
        },
        rows: gameHistory[0].rows
    }
}
