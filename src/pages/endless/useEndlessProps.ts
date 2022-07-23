import {Game} from "../../game/game";
import {atom, useRecoilState} from "recoil";
import {Command} from "../../game/command";
import {Endless} from "../../game/Endless";
import {v1PracticeCompressor} from "../../game/compressor/v1PracticeCompressor";

const endlessState= atom({
    key: 'endless',
    default: Endless.create([Game.create(Math.random() * 1000000)])
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
