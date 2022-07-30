import {Endless} from "./Endless";
import {Command} from "./command";
import {Game} from "./game";
import {CurrentMino} from "./CurrentMino";
import {sampleMinos, sampleTemplates} from "../pages/practice/sample";
import {Cell, createEmptyRows} from "./cell";
import {Random} from "./random";
import {RenCounter} from "./RenCounter";
import {minoFactory} from "./mino";
import {Seed} from "./seed";

function input(endless: Endless, commands: [Command, number][]): Endless {
    let e = endless
    for (const command of commands) {
        for (let i = 0; i < command[1]; i++) {
            e = e.input(command[0])
        }
    }
    return e
}

const seed = Seed.random()

describe("createPracticeInitializationProps", () => {

    test("開幕 DT -> DT", () => {
        const game = new Game(
            CurrentMino.create(sampleMinos[0]),
            createEmptyRows(20, 10),
            null,
            sampleMinos.slice(1),
            new Random(seed),
            seed,
            0,
            RenCounter.create()
        )
        const endless = Endless.create([game])
        const inputted = input(endless, [
            [Command.Up, 1],
            [Command.Left, 3], [Command.Up, 1],
            [Command.Hold, 1],
            [Command.Hold, 1],
            [Command.Right, 1], [Command.Up, 1],
            [Command.RotationRight, 2], [Command.Right, 1], [Command.Up, 1],
            [Command.RotationLeft, 1], [Command.Right, 5], [Command.Up, 1],
            [Command.Hold, 1],
            [Command.Left, 1], [Command.RotationLeft, 1], [Command.Up, 1],
            [Command.Hold, 1],
            // T
            [Command.RotationRight, 1], [Command.Right, 3], [Command.Down, 17], [Command.RotationRight, 1], [Command.Up, 1],
            [Command.Right, 1], [Command.Up, 1],
            [Command.RotationLeft, 1], [Command.Left, 1], [Command.Up, 1],
            [Command.Hold, 1],
            [Command.Left, 3], [Command.Up, 1],
            [Command.RotationRight, 1], [Command.Right, 4], [Command.Up, 1],
            [Command.Hold, 1],
            [Command.Left, 3], [Command.Up, 1],
            [Command.Hold, 1],
            [Command.RotationRight, 2], [Command.Left, 3], [Command.Up, 1],
            [Command.Hold, 1],
            // T
            [Command.RotationRight, 1], [Command.Right, 3], [Command.Down, 16], [Command.RotationRight, 1], [Command.Up, 1],
        ])

        const practiceInitializationProps = inputted.createPracticeInitializationProps()
        expect(practiceInitializationProps.seed).toStrictEqual(seed.value)
        expect(practiceInitializationProps.templates[0]).toStrictEqual(sampleTemplates[0])
        expect(practiceInitializationProps.templates[1]).toStrictEqual(sampleTemplates[1])
        expect(practiceInitializationProps.templates[2]).toStrictEqual(sampleTemplates[2])
        expect(practiceInitializationProps.templates[3]).toStrictEqual(sampleTemplates[3])
        expect(practiceInitializationProps.templates[4]).toStrictEqual(sampleTemplates[4])
        expect(practiceInitializationProps.templates.length).toBe(5)
    })

    test("連続でラインが消える場合", () => {
        const game = new Game(
            CurrentMino.create(minoFactory.o()),
            createEmptyRows(20, 10),
            null,
            [minoFactory.o(), minoFactory.o(), minoFactory.i(), minoFactory.i()],
            new Random(seed),
            seed,
            0,
            RenCounter.create()
        )
        const endless = Endless.create([game])
        const inputted = input(endless, [
            [Command.Left, 3], [Command.Up, 1],
            [Command.Left, 1], [Command.Up, 1],
            [Command.Right, 1], [Command.Up, 1],
            [Command.Right, 3], [Command.Up, 1],
            [Command.Right, 3], [Command.Up, 1],
        ])

        const expected1 = createEmptyRows(20, 10)
        expected1[18][0] = Cell.YellowTemplate
        expected1[18][1] = Cell.YellowTemplate
        expected1[18][2] = Cell.YellowTemplate
        expected1[18][3] = Cell.YellowTemplate
        expected1[18][4] = Cell.YellowTemplate
        expected1[18][5] = Cell.YellowTemplate
        expected1[19][0] = Cell.YellowTemplate
        expected1[19][1] = Cell.YellowTemplate
        expected1[19][2] = Cell.YellowTemplate
        expected1[19][3] = Cell.YellowTemplate
        expected1[19][4] = Cell.YellowTemplate
        expected1[19][5] = Cell.YellowTemplate

        const expected2 = createEmptyRows(20, 10)
        expected2[18][0] = Cell.YellowTemplate
        expected2[18][1] = Cell.YellowTemplate
        expected2[18][2] = Cell.YellowTemplate
        expected2[18][3] = Cell.YellowTemplate
        expected2[18][4] = Cell.YellowTemplate
        expected2[18][5] = Cell.YellowTemplate
        expected2[19][0] = Cell.YellowTemplate
        expected2[19][1] = Cell.YellowTemplate
        expected2[19][2] = Cell.YellowTemplate
        expected2[19][3] = Cell.YellowTemplate
        expected2[19][4] = Cell.YellowTemplate
        expected2[19][5] = Cell.YellowTemplate
        expected2[19][6] = Cell.LightBlueTemplate
        expected2[19][7] = Cell.LightBlueTemplate
        expected2[19][8] = Cell.LightBlueTemplate
        expected2[19][9] = Cell.LightBlueTemplate

        const expected3 = createEmptyRows(20, 10)
        expected3[19][0] = Cell.YellowTemplate
        expected3[19][1] = Cell.YellowTemplate
        expected3[19][2] = Cell.YellowTemplate
        expected3[19][3] = Cell.YellowTemplate
        expected3[19][4] = Cell.YellowTemplate
        expected3[19][5] = Cell.YellowTemplate
        expected3[19][6] = Cell.LightBlueTemplate
        expected3[19][7] = Cell.LightBlueTemplate
        expected3[19][8] = Cell.LightBlueTemplate
        expected3[19][9] = Cell.LightBlueTemplate

        const practiceInitializationProps = inputted.createPracticeInitializationProps()
        expect(practiceInitializationProps.seed).toStrictEqual(seed.value)
        expect(practiceInitializationProps.templates[0]).toStrictEqual(expected1)
        expect(practiceInitializationProps.templates[1]).toStrictEqual(expected2)
        expect(practiceInitializationProps.templates[2]).toStrictEqual(expected3)
        expect(practiceInitializationProps.templates[3]).toStrictEqual(createEmptyRows(20, 10))
        expect(practiceInitializationProps.templates.length).toBe(4)
    })
})
