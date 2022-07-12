import {atom, selector} from "recoil";
import {Game} from "../game/game";

// TODO gameHistory の default を引数で受け取るようにして、Practice でも使えるようにする
function createGameStore() {
    const gameHistory = atom<Game[]>({
        key: "gameHistory",
        default: [Game.create(Math.random() * 1000000)],
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

export const endlessStore = createGameStore()
