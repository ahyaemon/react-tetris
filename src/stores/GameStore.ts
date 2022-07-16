import {atom, selector} from "recoil";
import {Game} from "../game/game";

type GameUpdater = () => void

export type GameUpdateMethods = {
    up: GameUpdater,
    right: GameUpdater,
    down: GameUpdater,
    left: GameUpdater,
    rotationRight:　GameUpdater,
    rotationLeft:　GameUpdater,
    hold: GameUpdater,
}

export type GameStore = ReturnType<typeof createGameStore>

export function createGameStore(key: string, game: Game) {
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
