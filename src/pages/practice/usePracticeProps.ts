import {useRecoilValue, useSetRecoilState} from "recoil";
import {practiceStore} from "../../stores/GameStore";
import {Game} from "../../game/game";
import {Command} from "../../game/command";

export function usePracticeProps() {

    const nextMinos = useRecoilValue(practiceStore.nextMinos)
    const heldMino = useRecoilValue(practiceStore.heldMino)
    const clearedLineCount = useRecoilValue(practiceStore.clearedLineCount)
    const renCount = useRecoilValue(practiceStore.renCount)
    const board = useRecoilValue(practiceStore.board)
    const historySize = useRecoilValue(practiceStore.historySize)
    const rows = useRecoilValue(practiceStore.rows)

    const setGameHistory = useSetRecoilState(practiceStore.gameHistory)

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
            nextMinos,
            heldMino,
            clearedLineCount,
            renCount,
            board,
            historySize,
            rows,
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
            },
        },
    }
}
