import {Game} from "../game/game";
import {useSetRecoilState} from "recoil";
import {GameStore} from "../stores/GameStore";

type GameUpdaterReturnType = {
    updateRecentlyGame: (f: (game: Game) => Game) => void
    addGame: (f: (game: Game) => Game) => void
    back: () => void
    newGame: () => void,
    retry: () => void,
}

export function useGameUpdater(gameStore: GameStore): GameUpdaterReturnType {

    const setGameHistory = useSetRecoilState(gameStore.gameHistory)

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
        newGame: () => {
            setGameHistory([Game.create(Math.random() * 1000000)])
        },
        retry: () => {
            setGameHistory(gameHistory => {
                return [gameHistory[gameHistory.length - 1]]
            })
        },
    }
}
