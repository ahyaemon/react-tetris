import {Practice, PracticeInitializationProps} from "./Practice";
import {Cell, createEmptyRows} from "./cell";
import {Command} from "./command";

describe("bug: PracticeInitializationProps から作成した時にテンプレートが先に進まないことがある", () => {

    test("seed: 0, 連続で消えるもの", () => {
        const template1 = createEmptyRows(20, 10)
        template1[16][0] = Cell.LightBlueTemplate
        template1[17][0] = Cell.LightBlueTemplate
        template1[17][1] = Cell.OrangeTemplate
        template1[17][2] = Cell.OrangeTemplate
        template1[17][3] = Cell.OrangeTemplate
        template1[18][0] = Cell.LightBlueTemplate
        template1[18][1] = Cell.OrangeTemplate
        template1[18][2] = Cell.GreenTemplate
        template1[18][3] = Cell.GreenTemplate
        template1[18][4] = Cell.PurpleTemplate
        template1[18][5] = Cell.RedTemplate
        template1[18][6] = Cell.RedTemplate
        template1[19][0] = Cell.LightBlueTemplate
        template1[19][1] = Cell.GreenTemplate
        template1[19][2] = Cell.GreenTemplate
        template1[19][3] = Cell.PurpleTemplate
        template1[19][4] = Cell.PurpleTemplate
        template1[19][5] = Cell.PurpleTemplate
        template1[19][6] = Cell.RedTemplate
        template1[19][7] = Cell.RedTemplate

        const template2 = [...template1.map(row => [...row])]
        template2[18][8] = Cell.YellowTemplate
        template2[18][9] = Cell.YellowTemplate
        template2[19][8] = Cell.YellowTemplate
        template2[19][9] = Cell.YellowTemplate

        const template3 = createEmptyRows(20, 10)
        template3[17][0] = Cell.LightBlueTemplate
        template3[18][0] = Cell.LightBlueTemplate
        template3[18][1] = Cell.OrangeTemplate
        template3[18][2] = Cell.OrangeTemplate
        template3[18][3] = Cell.OrangeTemplate
        template3[18][5] = Cell.BlueTemplate
        template3[18][6] = Cell.BlueTemplate
        template3[18][7] = Cell.BlueTemplate
        template3[19][0] = Cell.LightBlueTemplate
        template3[19][1] = Cell.OrangeTemplate
        template3[19][2] = Cell.GreenTemplate
        template3[19][3] = Cell.GreenTemplate
        template3[19][4] = Cell.PurpleTemplate
        template3[19][5] = Cell.RedTemplate
        template3[19][6] = Cell.RedTemplate
        template3[19][7] = Cell.BlueTemplate
        template3[19][8] = Cell.YellowTemplate
        template3[19][9] = Cell.YellowTemplate

        const template4 = createEmptyRows(20, 10)

        const props: PracticeInitializationProps = {
            seed: 0,
            templates: [
                template1,
                template2,
                template3,
                template4,
            ],
        }
        const practice = Practice.initialize(props)
        const first = practice
            .input(Command.Up) // T
            .input(Command.Left).input(Command.Left).input(Command.Up) // S
            .input(Command.Right).input(Command.Right).input(Command.Up) // Z
            .input(Command.RotationLeft).input(Command.Left).input(Command.Left).input(Command.Left).input(Command.Left).input(Command.Up) // I
            .input(Command.RotationLeft).input(Command.RotationLeft).input(Command.Left).input(Command.Left).input(Command.Up) // L

        expect(first.templateIndices).toStrictEqual([0, 0, 0, 0, 0, 1])

        const second = first
            .input(Command.Right).input(Command.Right).input(Command.Right).input(Command.Right).input(Command.Right).input(Command.Up) // O
        expect(second.templateIndices).toStrictEqual([0, 0, 0, 0, 0, 1, 2])
    })
})
