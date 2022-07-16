import {useRecoilValue, useSetRecoilState} from "recoil";
import {createGameStore} from "../../stores/GameStore";
import {Game} from "../../game/game";
import {Command} from "../../game/command";
import {CurrentMino} from "../../game/CurrentMino";
import {minoFactory} from "../../game/mino";
import {Color} from "../../game/color";
import {Random} from "../../game/random";
import {RenCounter} from "../../game/RenCounter";

const seed = Math.random() * 1000000

const practiceStore = createGameStore(
    "practice",
    new Game(
        CurrentMino.create(minoFactory.i()),
        Array(20).fill(0).map(_ => Array(10).fill(Color.None)),
        null,
        [minoFactory.o(), minoFactory.s(), minoFactory.z(), minoFactory.l(), minoFactory.j(), minoFactory.t()],
        new Random(seed),
        seed,
        0,
        RenCounter.create()
    )
)
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
                hold: () => addGame(game => game.hold()),
            },
        },
    }
}
