import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {createGameStore} from "../../stores/GameStore";
import {Game} from "../../game/game";
import {Command} from "../../game/command";
import {CurrentMino} from "../../game/CurrentMino";
import {Cell} from "../../game/cell";
import {Random} from "../../game/random";
import {RenCounter} from "../../game/RenCounter";
import {createBoardTemplateStore} from "../../stores/TemplateStore";
import {sampleMinos, sampleTemplates2} from "./sample";
import {createBoardStateWithTemplate, matchTemplate} from "../../game/BoardTemplate";
import {Practice} from "../../game/Practice";

const seed = Math.random() * 1000000

const game = new Game(
    CurrentMino.create(sampleMinos[0]),
    Array(20).fill(0).map(_ => Array(10).fill(Cell.None)),
    null,
    sampleMinos.slice(1),
    new Random(seed),
    seed,
    0,
    RenCounter.create()
)

const practiceState = atom({
    key: "practice",
    default: Practice.create(game, sampleTemplates2)
})

const practiceGameStore = createGameStore("practice", game)

const templateStore = createBoardTemplateStore()

export function usePracticeProps() {
    const [practice, setPractice] = useRecoilState(practiceState)

    const currentGame = useRecoilValue(practiceGameStore.currentGame)
    const historySize = useRecoilValue(practiceGameStore.historySize)
    const gameHistory = useRecoilValue(practiceGameStore.gameHistory)
    const setGameHistory = useSetRecoilState(practiceGameStore.gameHistory)

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
        // currentGame.board にすることで、ドロップ直前の状態を得る
        if (matchTemplate(currentGame.board, currentTemplateBoard)) {
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
            currentGame: practice.currentGame,
            historySize: practice.historySize,
            input: (command: Command) => {
                setPractice(practice => practice.input(command))
            },
        },
        template: {
            boardWithTemplate: practice.boardWithTemplate,
            isCleared: practice.isCleared,
        },
        // game: {
        //     currentGame,
        //     historySize,
        //     // TODO back した時に、template も戻さないといけない
        //     back: () => {
        //         setGameHistory( gameHistory => {
        //             return gameHistory.slice(1, gameHistory.length)
        //         })
        //     },
        //     newGame: () => {
        //         setGameHistory([Game.create(Math.random() * 1000000)])
        //     },
        //     retry: () => {
        //         setGameHistory(gameHistory => {
        //             return [gameHistory[gameHistory.length - 1]]
        //         })
        //     },
        //     input: {
        //         up: () => {
        //             addGameAndTemplate(
        //                 game => game.input(Command.Up),
        //             )
        //         },
        //         right: () => updateRecentlyGame(game => game.input(Command.Right)),
        //         down: () => updateRecentlyGame(game => game.input(Command.Down)),
        //         left: () => updateRecentlyGame(game => game.input(Command.Left)),
        //         rotationRight:　() => updateRecentlyGame(game => game.input(Command.RotationRight)),
        //         rotationLeft:　() => updateRecentlyGame(game => game.input(Command.RotationLeft)),
        //         hold: () => addGame(game => game.hold()),
        //     },
        // },
        // template: {
        //     currentTemplateBoard,
        //     boardWithTemplate: createBoardStateWithTemplate(currentTemplateBoard, currentGame.board),
        //     isCleared: templatesLength === 1,
        // },
    }
}
