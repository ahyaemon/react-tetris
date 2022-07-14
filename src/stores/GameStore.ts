import {atom, selector} from "recoil";
import {Game} from "../game/game";
import {minoFactory} from "../game/mino";
import {CurrentMino} from "../game/CurrentMino";
import {Color} from "../game/color";
import {Random} from "../game/random";
import {RenCounter} from "../game/RenCounter";

export type GameStore = ReturnType<typeof createGameStore>

function createGameStore(key: string, game: Game) {
    const gameHistory = atom<Game[]>({
        key: key + "gameHistory",
        default: [game],
    })

    return {
        gameHistory,
        nextMinos: selector({
            key: key + 'nextMinos',
            get: ({get}) => get(gameHistory)[0].nextMinos
        }),

        heldMino: selector({
            key: key + 'heldMino',
            get: ({get}) => get(gameHistory)[0].heldMino
        }),

        clearedLineCount: selector({
            key: key + 'clearedLineCount',
            get: ({get}) => get(gameHistory)[0].clearedRowCount
        }),

        renCount: selector({
            key: key + 'renCount',
            get: ({get}) => get(gameHistory)[0].renCount()
        }),

        board: selector({
            key: key + 'board',
            get: ({get}) => get(gameHistory)[0].state
        }),

        historySize: selector({
            key: key + 'historySize',
            get: ({get}) => get(gameHistory).length
        }),

        rows: selector({
            key: key + 'rows',
            get: ({get}) => get(gameHistory)[0].rows
        })
    }
}

export const endlessStore = createGameStore("endless", Game.create(Math.random() * 1000000))

const seed = Math.random() * 1000000
export const practiceStore = createGameStore(
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
