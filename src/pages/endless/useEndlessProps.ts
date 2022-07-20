import {Game} from "../../game/game";
import {createGameStore} from "../../stores/GameStore";
import {atom, useRecoilState} from "recoil";
import {Command} from "../../game/command";
import {Endless} from "../../game/Endless";

const endlessStore = createGameStore("endless", Game.create(Math.random() * 1000000))

const endlessState= atom({
    key: 'endless',
    default: Endless.create([Game.create(Math.random() * 1000000)])
})

export function useEndlessProps() {

    const [endless, setEndless] = useRecoilState(endlessState)

    return {
        currentGame: endless.currentGame,
        historySize: endless.historySize,
        input: (command: Command) => {
            setEndless(endless => endless.input(command))
        }
    }
}
