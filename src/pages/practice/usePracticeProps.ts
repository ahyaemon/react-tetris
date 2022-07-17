import {useRecoilValue, useSetRecoilState} from "recoil";
import {createGameStore} from "../../stores/GameStore";
import {BoardState, Game} from "../../game/game";
import {Command} from "../../game/command";
import {CurrentMino} from "../../game/CurrentMino";
import {Color, Row} from "../../game/color";
import {Random} from "../../game/random";
import {RenCounter} from "../../game/RenCounter";
import {createBoardTemplateStore} from "../../stores/TemplateStore";
import {sampleMinos} from "./sample";

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

type BoardTemplate = BoardState

function createTemplateMap(): Map<Color, Color> {
    const map = new Map()
    map.set(Color.OrangeTemplate, Color.Orange)
    map.set(Color.PurpleTemplate, Color.Purple)
    map.set(Color.RedTemplate, Color.Red)
    map.set(Color.GreenTemplate, Color.Green)
    map.set(Color.YellowTemplate, Color.Yellow)
    map.set(Color.BlueTemplate, Color.Blue)
    map.set(Color.LightBlueTemplate, Color.LightBlue)
    map.set(Color.None, Color.None)
    return map
}

const templateMap = createTemplateMap()

function templateToRows(template: BoardTemplate): Row[] {
    return template.rows.map(
        row => row.map(
            cell => templateMap.get(cell)!
        )
    )
}

function matchTemplate(rows: Row[], template: BoardTemplate): boolean {
    const templateRows = templateToRows(template)
    for(let i = 0; i < 20; i++) {
        for(let j = 0; j < 10; j++) {
            if (rows[i][j] !== templateRows[i][j]) {
                return false
            }
        }
    }
    return true
}

function createBoardStateWithTemplate(template: BoardTemplate, boardState: BoardState): BoardState {
    const rows = []
    for (let i = 0; i < 20; i++) {
        const colors = []
        for (let j = 0; j < 10; j++) {
            if (boardState.rows[i][j] === Color.None) {
                colors.push(template.rows[i][j])
            } else {
                colors.push(boardState.rows[i][j])
            }

        }
        rows.push(colors)
    }
    return { rows }
}

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
            boardWithTemplate: createBoardStateWithTemplate(currentTemplateBoard, board)
        },
    }
}
