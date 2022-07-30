import {Game} from "../../game/game";
import {atom, useRecoilState} from "recoil";
import {Command} from "../../game/command";
import {Endless} from "../../game/Endless";
import {v1PracticeCompressor} from "../../game/compressor/v1PracticeCompressor";
import {Seed} from "../../game/seed";

const endlessState= atom({
    key: 'endless',
    default: Endless.create([Game.create(Seed.random())])
})

export function useEndlessProps() {

    const [endless, setEndless] = useRecoilState(endlessState)

    const createPracticeQueryParam = (): string => {
        const props = endless.createPracticeInitializationProps()
        return v1PracticeCompressor.compress(props)
    }

    return {
        currentGame: endless.currentGame,
        historySize: endless.historySize,
        input: (command: Command) => {
            setEndless(endless => endless.input(command))
        },
        createPracticeQueryParam,
    }
}
