import {atom, selector} from "recoil";
import {Game} from "./game/game";

export const gameHistory = atom<Game[]>({
    key: "gameHistory",
    default: [Game.create(Math.random() * 1000000)],
})

export const boardSelector = selector({
    key: 'board',
    get: ({get}) => get(gameHistory)[0].state
})

export const historySizeSelector = selector({
    key: 'historySize',
    get: ({get}) => get(gameHistory).length
})

export const nextMinosSelector = selector({
    key: 'nextMinos',
    get: ({get}) => get(gameHistory)[0].nextMinos
})

export const heldMinoSelector = selector({
    key: 'heldMino',
    get: ({get}) => get(gameHistory)[0].heldMino
})
