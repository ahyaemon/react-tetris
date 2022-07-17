import {useRecoilValue, useSetRecoilState} from "recoil";
import {createGameStore} from "../../stores/GameStore";
import {Game} from "../../game/game";
import {Command} from "../../game/command";
import {CurrentMino} from "../../game/CurrentMino";
import {Color} from "../../game/color";
import {Random} from "../../game/random";
import {RenCounter} from "../../game/RenCounter";
import {createBoardTemplateStore} from "../../stores/TemplateStore";
import {sampleMinos} from "./sample";
import {createBoardStateWithTemplate, matchTemplate} from "../../game/BoardTemplate";

const seed = Math.random() * 1000000

const practiceStore = createGameStore(
    "practice",
    new Game(
        CurrentMino.create(sampleMinos[0]),
        Array(20).fill(0).map(_ => Array(10).fill(Color.None)),
        null,
        sampleMinos.slice(1),
        new Random(seed),
        seed,
        0,
        RenCounter.create()
    )
)

const templateStore = createBoardTemplateStore()

export function usePracticeProps() {

    const nextMinos = useRecoilValue(practiceStore.nextMinos)
    const heldMino = useRecoilValue(practiceStore.heldMino)
    const clearedLineCount = useRecoilValue(practiceStore.clearedLineCount)
    const renCount = useRecoilValue(practiceStore.renCount)
    const board = useRecoilValue(practiceStore.board)
    const historySize = useRecoilValue(practiceStore.historySize)
    const rows = useRecoilValue(practiceStore.rows)
    const gameHistory = useRecoilValue(practiceStore.gameHistory)
    const setGameHistory = useSetRecoilState(practiceStore.gameHistory)

    const addGame = (gameUpdateCallback: (game: Game) => Game) => {
        setGameHistory( gameHistory => {
            const newGame = gameUpdateCallback(gameHistory[0])
            return [newGame, ...gameHistory]
        })
    }

    const addGameAndTemplate = (
        gameUpdateCallback: (game: Game) => Game,
    ) => {
        const currentGame = gameHistory[0]
        const newGame = gameUpdateCallback(currentGame)
        setGameHistory( gameHistory => {
            return [newGame, ...gameHistory]
        })

        // ラインが消える時の判定は、newGame.rows だと消えた後の状態との比較になるため、currentGame と比較する
        // currentGame.state.rows にすることで、ドロップ直前の状態を得る
        if (matchTemplate(currentGame.state.rows, currentTemplateBoard)) {
            setTemplateBoards(templates => templates.slice(1))
        }
        else if (matchTemplate(newGame.rows, currentTemplateBoard)) {
            setTemplateBoards(templates => templates.slice(1))
        }
    }

    const updateRecentlyGame = (gameUpdateCallback: (game: Game) => Game) => {
        setGameHistory(gameHistory => {
            const newGame = gameUpdateCallback(gameHistory[0])
            return [newGame, ...gameHistory.slice(1, gameHistory.length)]
        })
    }

    const currentTemplateBoard = useRecoilValue(templateStore.currentBoard)
    const templatesLength = useRecoilValue(templateStore.length)
    const setTemplateBoards = useSetRecoilState(templateStore.boardTemplates)

    return {
        game: {
            nextMinos,
            heldMino,
            clearedLineCount,
            renCount,
            board,
            historySize,
            rows,
            // TODO back した時に、template も戻さないといけない
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
                up: () => {
                    addGameAndTemplate(
                        game => game.input(Command.Up),
                    )
                },
                right: () => updateRecentlyGame(game => game.input(Command.Right)),
                down: () => updateRecentlyGame(game => game.input(Command.Down)),
                left: () => updateRecentlyGame(game => game.input(Command.Left)),
                rotationRight:　() => updateRecentlyGame(game => game.input(Command.RotationRight)),
                rotationLeft:　() => updateRecentlyGame(game => game.input(Command.RotationLeft)),
                hold: () => addGame(game => game.hold()),
            },
        },
        template: {
            currentTemplateBoard,
            boardWithTemplate: createBoardStateWithTemplate(currentTemplateBoard, board),
            isCleared: templatesLength === 1,
        },
    }
}
