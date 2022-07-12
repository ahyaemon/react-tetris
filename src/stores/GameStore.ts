import {atom, selector} from "recoil";
import {Game} from "../game/game";
import {minoFactory} from "../game/mino";
import {CurrentMino} from "../game/CurrentMino";
import {Color} from "../game/color";
import {Random} from "../game/random";
import {RenCounter} from "../game/RenCounter";

export type GameStore = ReturnType<typeof createGameStore>

function createGameStore(game: Game) {
    const gameHistory = atom<Game[]>({
        key: "gameHistory",
        default: [game],
    })

    return {
        gameHistory,
        nextMinos: selector({
            key: 'nextMinos',
            get: ({get}) => get(gameHistory)[0].nextMinos
        }),

        heldMino: selector({
            key: 'heldMino',
            get: ({get}) => get(gameHistory)[0].heldMino
        }),

        clearedLineCount: selector({
            key: 'clearedLineCount',
            get: ({get}) => get(gameHistory)[0].clearedRowCount
        }),

        renCount: selector({
            key: 'renCount',
            get: ({get}) => get(gameHistory)[0].renCount()
        }),
        board: selector({
            key: 'board',
            get: ({get}) => get(gameHistory)[0].state
        }),

        historySize: selector({
            key: 'historySize',
            get: ({get}) => get(gameHistory).length
        }),
    }
}

export const endlessStore = createGameStore(Game.create(Math.random() * 1000000))

const seed = Math.random() * 1000000
export const practiceStore = createGameStore(
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
