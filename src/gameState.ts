import {atom, selector} from "recoil";
import {Game} from "./game/game";

export const game = atom<Game>({
    key: "game",
    default: Game.create(),
})

export const boardSelector = selector({
    key: 'board',
    get: ({get}) => get(game).state
})
