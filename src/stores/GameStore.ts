import {atom, selector} from "recoil";
import {Game} from "../game/game";

export type GameStore = ReturnType<typeof createGameStore>

export function createGameStore(key: string, game: Game) {
    const gameHistory = atom<Game[]>({
        key: key + "gameHistory",
        default: [game],
    })

    return {
        gameHistory,
        currentGame: selector({
            key: key + 'currentGame',
            get: ({get}) => get(gameHistory)[0],
        }),

        historySize: selector({
            key: key + 'historySize',
            get: ({get}) => get(gameHistory).length
        }),
    }
}
