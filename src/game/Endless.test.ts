import {Endless} from "./Endless";
import {Command} from "./command";
import {Game} from "./game";
import {CurrentMino} from "./CurrentMino";
import {sampleMinos, sampleTemplates} from "../pages/practice/sample";
import {Cell, createEmptyRows} from "./cell";
import {RenCounter} from "./RenCounter";
import {minoFactory} from "./mino";
import {Seed} from "./seed";
import {NextMinosHolder} from "./NextMinosHolder";
import {Random} from "./random";

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
        const nextMinosHolder = new NextMinosHolder(sampleMinos.slice(1), seed, new Random(seed))
        const game = new Game(
            CurrentMino.create(sampleMinos[0]),
            createEmptyRows(20, 10),
            null,
            nextMinosHolder,
            0,
            RenCounter.create(),
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
        expect(practiceInitializationProps.seed).toStrictEqual(nextMinosHolder.seed.value)
        expect(practiceInitializationProps.templates[0]).toStrictEqual(sampleTemplates[0])
        expect(practiceInitializationProps.templates[1]).toStrictEqual(sampleTemplates[1])
        expect(practiceInitializationProps.templates[2]).toStrictEqual(sampleTemplates[2])
        expect(practiceInitializationProps.templates[3]).toStrictEqual(sampleTemplates[3])
        expect(practiceInitializationProps.templates[4]).toStrictEqual(sampleTemplates[4])
        expect(practiceInitializationProps.templates.length).toBe(5)
    })

    test("連続でラインが消える場合", () => {
        const nextMinosHolder = new NextMinosHolder([minoFactory.o(), minoFactory.o(), minoFactory.i(), minoFactory.i()], seed, new Random(seed))
        const game = new Game(
            CurrentMino.create(minoFactory.o()),
            createEmptyRows(20, 10),
            null,
            nextMinosHolder,
            0,
            RenCounter.create(),
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
        expect(practiceInitializationProps.seed).toStrictEqual(nextMinosHolder.seed.value)
        expect(practiceInitializationProps.templates[0]).toStrictEqual(expected1)
        expect(practiceInitializationProps.templates[1]).toStrictEqual(expected2)
        expect(practiceInitializationProps.templates[2]).toStrictEqual(expected3)
        expect(practiceInitializationProps.templates[3]).toStrictEqual(createEmptyRows(20, 10))
        expect(practiceInitializationProps.templates.length).toBe(4)
    })
})

describe("bug: テンプレートがうまく作成できていない", () => {
    // うまくできてないと思ったけど、できてないのはテンプレートを使う方っぽい
    // テストは組んだけどそのまま通った
    test("シード値 0, 連続で消えない場合", () => {
        const endless = Endless.createBySeed(new Seed(0))
        const inputted = input(endless, [
            [Command.Left, 1], [Command.Up, 1], // T
            [Command.Left, 3], [Command.Up, 1], // S
            [Command.Right, 1], [Command.Up, 1], // Z
            [Command.Hold, 1],
            [Command.Right, 4], [Command.Up, 1], // L <- ここで 1 ライン消える
            [Command.Hold, 1],
            [Command.RotationLeft, 1], [Command.Left, 4], [Command.Up, 1], // I
            [Command.Right, 3], [Command.Up, 1], // J <- ここで 1 ライン消える
        ])

        const expected1 = createEmptyRows(20, 10)
        expected1[18][1] = Cell.GreenTemplate
        expected1[18][2] = Cell.GreenTemplate
        expected1[18][3] = Cell.PurpleTemplate
        expected1[18][4] = Cell.RedTemplate
        expected1[18][5] = Cell.RedTemplate
        expected1[19][0] = Cell.GreenTemplate
        expected1[19][1] = Cell.GreenTemplate
        expected1[19][2] = Cell.PurpleTemplate
        expected1[19][3] = Cell.PurpleTemplate
        expected1[19][4] = Cell.PurpleTemplate
        expected1[19][5] = Cell.RedTemplate
        expected1[19][6] = Cell.RedTemplate

        const expected2 = createEmptyRows(20, 10)
        expected2[18][1] = Cell.GreenTemplate
        expected2[18][2] = Cell.GreenTemplate
        expected2[18][3] = Cell.PurpleTemplate
        expected2[18][4] = Cell.RedTemplate
        expected2[18][5] = Cell.RedTemplate
        expected2[18][9] = Cell.OrangeTemplate
        expected2[19][0] = Cell.GreenTemplate
        expected2[19][1] = Cell.GreenTemplate
        expected2[19][2] = Cell.PurpleTemplate
        expected2[19][3] = Cell.PurpleTemplate
        expected2[19][4] = Cell.PurpleTemplate
        expected2[19][5] = Cell.RedTemplate
        expected2[19][6] = Cell.RedTemplate
        expected2[19][7] = Cell.OrangeTemplate
        expected2[19][8] = Cell.OrangeTemplate
        expected2[19][9] = Cell.OrangeTemplate

        const expected3 = createEmptyRows(20, 10)
        expected3[16][0] = Cell.LightBlueTemplate
        expected3[17][0] = Cell.LightBlueTemplate
        expected3[18][0] = Cell.LightBlueTemplate
        expected3[19][0] = Cell.LightBlueTemplate
        expected3[19][1] = Cell.GreenTemplate
        expected3[19][2] = Cell.GreenTemplate
        expected3[19][3] = Cell.PurpleTemplate
        expected3[19][4] = Cell.RedTemplate
        expected3[19][5] = Cell.RedTemplate
        expected3[19][9] = Cell.OrangeTemplate

        const expected4 = createEmptyRows(20, 10)
        expected4[16][0] = Cell.LightBlueTemplate
        expected4[17][0] = Cell.LightBlueTemplate
        expected4[18][0] = Cell.LightBlueTemplate
        expected4[18][6] = Cell.BlueTemplate
        expected4[19][0] = Cell.LightBlueTemplate
        expected4[19][1] = Cell.GreenTemplate
        expected4[19][2] = Cell.GreenTemplate
        expected4[19][3] = Cell.PurpleTemplate
        expected4[19][4] = Cell.RedTemplate
        expected4[19][5] = Cell.RedTemplate
        expected4[19][6] = Cell.BlueTemplate
        expected4[19][7] = Cell.BlueTemplate
        expected4[19][8] = Cell.BlueTemplate
        expected4[19][9] = Cell.OrangeTemplate

        const practiceInitializationProps = inputted.createPracticeInitializationProps()
        expect(practiceInitializationProps.templates[0]).toStrictEqual(expected1)
        expect(practiceInitializationProps.templates[1]).toStrictEqual(expected2)
        expect(practiceInitializationProps.templates[2]).toStrictEqual(expected3)
        expect(practiceInitializationProps.templates[3]).toStrictEqual(expected4)
        expect(practiceInitializationProps.templates[4]).toStrictEqual(createEmptyRows(20, 10))
        expect(practiceInitializationProps.templates.length).toBe(5)
    })

    test("シード値 0, 連続で消える場合", () => {
        const endless = Endless.createBySeed(new Seed(0))
        const inputted = input(endless, [
            [Command.Up, 1], // T
            [Command.Left, 2], [Command.Up, 1], // S
            [Command.Right, 2], [Command.Up, 1], // Z
            [Command.RotationLeft, 1], [Command.Left, 4], [Command.Up, 1], // I
            [Command.RotationLeft, 2], [Command.Left, 2], [Command.Up, 1], // L
            [Command.Hold, 1],
            [Command.RotationLeft, 1], [Command.Right, 5], [Command.Up, 1], // J
            [Command.RotationRight, 1], [Command.Right, 3], [Command.Up, 1], // L
        ])

        const expected1 = createEmptyRows(20, 10)
        expected1[16][0] = Cell.LightBlueTemplate
        expected1[17][0] = Cell.LightBlueTemplate
        expected1[17][1] = Cell.OrangeTemplate
        expected1[17][2] = Cell.OrangeTemplate
        expected1[17][3] = Cell.OrangeTemplate
        expected1[18][0] = Cell.LightBlueTemplate
        expected1[18][1] = Cell.OrangeTemplate
        expected1[18][2] = Cell.GreenTemplate
        expected1[18][3] = Cell.GreenTemplate
        expected1[18][4] = Cell.PurpleTemplate
        expected1[18][5] = Cell.RedTemplate
        expected1[18][6] = Cell.RedTemplate
        expected1[19][0] = Cell.LightBlueTemplate
        expected1[19][1] = Cell.GreenTemplate
        expected1[19][2] = Cell.GreenTemplate
        expected1[19][3] = Cell.PurpleTemplate
        expected1[19][4] = Cell.PurpleTemplate
        expected1[19][5] = Cell.PurpleTemplate
        expected1[19][6] = Cell.RedTemplate
        expected1[19][7] = Cell.RedTemplate

        const expected2 = createEmptyRows(20, 10)
        expected2[16][0] = Cell.LightBlueTemplate
        expected2[17][0] = Cell.LightBlueTemplate
        expected2[17][1] = Cell.OrangeTemplate
        expected2[17][2] = Cell.OrangeTemplate
        expected2[17][3] = Cell.OrangeTemplate
        expected2[17][9] = Cell.BlueTemplate
        expected2[18][0] = Cell.LightBlueTemplate
        expected2[18][1] = Cell.OrangeTemplate
        expected2[18][2] = Cell.GreenTemplate
        expected2[18][3] = Cell.GreenTemplate
        expected2[18][4] = Cell.PurpleTemplate
        expected2[18][5] = Cell.RedTemplate
        expected2[18][6] = Cell.RedTemplate
        expected2[18][9] = Cell.BlueTemplate
        expected2[19][0] = Cell.LightBlueTemplate
        expected2[19][1] = Cell.GreenTemplate
        expected2[19][2] = Cell.GreenTemplate
        expected2[19][3] = Cell.PurpleTemplate
        expected2[19][4] = Cell.PurpleTemplate
        expected2[19][5] = Cell.PurpleTemplate
        expected2[19][6] = Cell.RedTemplate
        expected2[19][7] = Cell.RedTemplate
        expected2[19][8] = Cell.BlueTemplate
        expected2[19][9] = Cell.BlueTemplate

        const expected3 = createEmptyRows(20, 10)
        expected3[17][0] = Cell.LightBlueTemplate
        expected3[17][7] = Cell.OrangeTemplate
        expected3[18][0] = Cell.LightBlueTemplate
        expected3[18][1] = Cell.OrangeTemplate
        expected3[18][2] = Cell.OrangeTemplate
        expected3[18][3] = Cell.OrangeTemplate
        expected3[18][7] = Cell.OrangeTemplate
        expected3[18][9] = Cell.BlueTemplate
        expected3[19][0] = Cell.LightBlueTemplate
        expected3[19][1] = Cell.OrangeTemplate
        expected3[19][2] = Cell.GreenTemplate
        expected3[19][3] = Cell.GreenTemplate
        expected3[19][4] = Cell.PurpleTemplate
        expected3[19][5] = Cell.RedTemplate
        expected3[19][6] = Cell.RedTemplate
        expected3[19][7] = Cell.OrangeTemplate
        expected3[19][8] = Cell.OrangeTemplate
        expected3[19][9] = Cell.BlueTemplate

        const practiceInitializationProps = inputted.createPracticeInitializationProps()
        expect(practiceInitializationProps.templates[0]).toStrictEqual(expected1)
        expect(practiceInitializationProps.templates[1]).toStrictEqual(expected2)
        expect(practiceInitializationProps.templates[2]).toStrictEqual(expected3)
        expect(practiceInitializationProps.templates[3]).toStrictEqual(createEmptyRows(20, 10))
        expect(practiceInitializationProps.templates.length).toBe(4)
    })
})
