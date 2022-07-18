import {Game} from "../../game/game";
import {createGameStore} from "../../stores/GameStore";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {Command} from "../../game/command";

const endlessStore = createGameStore("endless", Game.create(Math.random() * 1000000))

export function useEndlessProps() {

    const currentGame = useRecoilValue(endlessStore.currentGame)
    const historySize = useRecoilValue(endlessStore.historySize)
    const setGameHistory = useSetRecoilState(endlessStore.gameHistory)

    const addGame = (gameUpdateCallback: (game: Game) => Game) => {
        setGameHistory( gameHistory => {
            const newGame = gameUpdateCallback(gameHistory[0])
            return [newGame, ...gameHistory]
        })
    }

    const updateRecentlyGame = (gameUpdateCallback: (game: Game) => Game) => {
        setGameHistory(gameHistory => {
            const newGame = gameUpdateCallback(gameHistory[0])
            return [newGame, ...gameHistory.slice(1, gameHistory.length)]
        })
    }

    return {
        game: {
            currentGame,
            historySize,
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
            input: {
                up: () => addGame(game => game.input(Command.Up)),
                right: () => updateRecentlyGame(game => game.input(Command.Right)),
                down: () => updateRecentlyGame(game => game.input(Command.Down)),
                left: () => updateRecentlyGame(game => game.input(Command.Left)),
                rotationRight:　() => updateRecentlyGame(game => game.input(Command.RotationRight)),
                rotationLeft:　() => updateRecentlyGame(game => game.input(Command.RotationLeft)),
                hold: () => addGame(game => game.hold()),
            },
        },
    }
}
