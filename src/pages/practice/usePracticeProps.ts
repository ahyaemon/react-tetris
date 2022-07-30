import {atom, useRecoilState} from "recoil";
import {Game} from "../../game/game";
import {Command} from "../../game/command";
import {CurrentMino} from "../../game/CurrentMino";
import {Cell} from "../../game/cell";
import {Random} from "../../game/random";
import {RenCounter} from "../../game/RenCounter";
import {sampleMinos, sampleTemplates} from "./sample";
import {Practice, PracticeInitializationProps} from "../../game/Practice";
import {Seed} from "../../game/seed";

const seed = Seed.random().value

const game = new Game(
    CurrentMino.create(sampleMinos[0]),
    Array(20).fill(0).map(_ => Array(10).fill(Cell.None)),
    null,
    sampleMinos.slice(1),
    new Random(seed),
    seed,
    0,
    RenCounter.create()
)

const practiceState = atom({
    key: "practice",
    default: Practice.create(game, sampleTemplates)
})

const templateShowingState = atom({
    key: 'templateShowing',
    default: true,
})

export function usePracticeProps() {
    const [practice, setPractice] = useRecoilState(practiceState)

    const [templateShowing, setTemplateShowing] = useRecoilState(templateShowingState)

    return {
        initialize: (props: PracticeInitializationProps) => {
            setPractice(Practice.initialize(props))
        },
        game: {
            currentGame: practice.currentGame,
            historySize: practice.historySize,
            input: (command: Command) => {
                setPractice(practice => practice.input(command))
            },
        },
        template: {
            board: templateShowing ? practice.boardWithTemplate : practice.board,
            isCleared: practice.isCleared,
            toggleTemplateShowing: () => {
                setTemplateShowing(b => !b)
            }
        },
    }
}
