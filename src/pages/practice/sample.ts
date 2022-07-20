import {Cell} from "../../game/cell";
import {minoFactory} from "../../game/mino";

function createRows(): Cell[][] {
    const rows = []
    for (let i = 0; i < 20; i++) {
        const colors = []
        for (let j = 0; j < 10; j++) {
            colors.push(Cell.None)
        }
        rows.push(colors)
    }
    return rows
}

function rows1(): Cell[][] {
    const rows = createRows()

    rows[19][3] = Cell.LightBlueTemplate
    rows[19][4] = Cell.LightBlueTemplate
    rows[19][5] = Cell.LightBlueTemplate
    rows[19][6] = Cell.LightBlueTemplate

    rows[18][0] = Cell.YellowTemplate
    rows[18][1] = Cell.YellowTemplate
    rows[19][0] = Cell.YellowTemplate
    rows[19][1] = Cell.YellowTemplate

    rows[17][3] = Cell.RedTemplate
    rows[18][2] = Cell.RedTemplate
    rows[18][3] = Cell.RedTemplate
    rows[19][2] = Cell.RedTemplate

    rows[17][5] = Cell.GreenTemplate
    rows[17][6] = Cell.GreenTemplate
    rows[18][4] = Cell.GreenTemplate
    rows[18][5] = Cell.GreenTemplate

    rows[17][9] = Cell.BlueTemplate
    rows[18][9] = Cell.BlueTemplate
    rows[19][8] = Cell.BlueTemplate
    rows[19][9] = Cell.BlueTemplate

    rows[16][4] = Cell.OrangeTemplate
    rows[16][5] = Cell.OrangeTemplate
    rows[16][6] = Cell.OrangeTemplate
    rows[17][4] = Cell.OrangeTemplate

    return rows
}

function rows2(): Cell[][] {
    const rows = createRows()

    rows[19][3] = Cell.LightBlueTemplate
    rows[19][4] = Cell.LightBlueTemplate
    rows[19][5] = Cell.LightBlueTemplate
    rows[19][6] = Cell.LightBlueTemplate

    rows[18][0] = Cell.YellowTemplate
    rows[18][1] = Cell.YellowTemplate
    rows[19][0] = Cell.YellowTemplate
    rows[19][1] = Cell.YellowTemplate

    rows[17][3] = Cell.RedTemplate
    rows[18][2] = Cell.RedTemplate
    rows[18][3] = Cell.RedTemplate
    rows[19][2] = Cell.RedTemplate

    rows[17][5] = Cell.GreenTemplate
    rows[17][6] = Cell.GreenTemplate
    rows[18][4] = Cell.GreenTemplate
    rows[18][5] = Cell.GreenTemplate

    rows[17][9] = Cell.BlueTemplate
    rows[18][9] = Cell.BlueTemplate
    rows[19][8] = Cell.BlueTemplate
    rows[19][9] = Cell.BlueTemplate

    rows[16][4] = Cell.OrangeTemplate
    rows[16][5] = Cell.OrangeTemplate
    rows[16][6] = Cell.OrangeTemplate
    rows[17][4] = Cell.OrangeTemplate

    rows[18][6] = Cell.PurpleTemplate
    rows[18][7] = Cell.PurpleTemplate
    rows[18][8] = Cell.PurpleTemplate
    rows[19][7] = Cell.PurpleTemplate

    return rows
}

function rows3(): Cell[][] {
    const rows = createRows()

    rows[15][3] = Cell.LightBlueTemplate

    rows[16][0] = Cell.BlueTemplate
    rows[16][1] = Cell.BlueTemplate
    rows[16][2] = Cell.BlueTemplate
    rows[16][3] = Cell.LightBlueTemplate
    rows[16][5] = Cell.GreenTemplate
    rows[16][6] = Cell.GreenTemplate

    rows[17][0] = Cell.YellowTemplate
    rows[17][1] = Cell.YellowTemplate
    rows[17][2] = Cell.BlueTemplate
    rows[17][3] = Cell.LightBlueTemplate
    rows[17][4] = Cell.GreenTemplate
    rows[17][5] = Cell.GreenTemplate
    rows[17][9] = Cell.RedTemplate

    rows[18][0] = Cell.YellowTemplate
    rows[18][1] = Cell.YellowTemplate
    rows[18][2] = Cell.OrangeTemplate
    rows[18][3] = Cell.LightBlueTemplate
    rows[18][4] = Cell.OrangeTemplate
    rows[18][5] = Cell.OrangeTemplate
    rows[18][6] = Cell.OrangeTemplate
    rows[18][8] = Cell.RedTemplate
    rows[18][9] = Cell.RedTemplate

    rows[19][0] = Cell.OrangeTemplate
    rows[19][1] = Cell.OrangeTemplate
    rows[19][2] = Cell.OrangeTemplate
    rows[19][3] = Cell.RedTemplate
    rows[19][4] = Cell.OrangeTemplate
    rows[19][5] = Cell.GreenTemplate
    rows[19][6] = Cell.GreenTemplate
    rows[19][8] = Cell.RedTemplate
    rows[19][9] = Cell.BlueTemplate

    return rows
}

function rows4(): Cell[][] {
    const rows = createRows()

    rows[15][3] = Cell.LightBlueTemplate

    rows[16][0] = Cell.BlueTemplate
    rows[16][1] = Cell.BlueTemplate
    rows[16][2] = Cell.BlueTemplate
    rows[16][3] = Cell.LightBlueTemplate
    rows[16][5] = Cell.GreenTemplate
    rows[16][6] = Cell.GreenTemplate

    rows[17][0] = Cell.YellowTemplate
    rows[17][1] = Cell.YellowTemplate
    rows[17][2] = Cell.BlueTemplate
    rows[17][3] = Cell.LightBlueTemplate
    rows[17][4] = Cell.GreenTemplate
    rows[17][5] = Cell.GreenTemplate
    rows[17][6] = Cell.PurpleTemplate
    rows[17][7] = Cell.PurpleTemplate
    rows[17][8] = Cell.PurpleTemplate
    rows[17][9] = Cell.RedTemplate

    rows[18][0] = Cell.YellowTemplate
    rows[18][1] = Cell.YellowTemplate
    rows[18][2] = Cell.OrangeTemplate
    rows[18][3] = Cell.LightBlueTemplate
    rows[18][4] = Cell.OrangeTemplate
    rows[18][5] = Cell.OrangeTemplate
    rows[18][6] = Cell.OrangeTemplate
    rows[18][7] = Cell.PurpleTemplate
    rows[18][8] = Cell.RedTemplate
    rows[18][9] = Cell.RedTemplate

    rows[19][0] = Cell.OrangeTemplate
    rows[19][1] = Cell.OrangeTemplate
    rows[19][2] = Cell.OrangeTemplate
    rows[19][3] = Cell.RedTemplate
    rows[19][4] = Cell.OrangeTemplate
    rows[19][5] = Cell.GreenTemplate
    rows[19][6] = Cell.GreenTemplate
    rows[19][8] = Cell.RedTemplate
    rows[19][9] = Cell.BlueTemplate

    return rows
}

export const sampleTemplates = [
    rows1(),
    rows2(),
    rows3(),
    rows4(),
    createRows(),
]

export const sampleMinos = [
    minoFactory.i(),
    minoFactory.o(),
    minoFactory.s(),
    minoFactory.z(),
    minoFactory.l(),
    minoFactory.j(),
    minoFactory.t(),

    minoFactory.l(),
    minoFactory.s(),
    minoFactory.i(),
    minoFactory.o(),
    minoFactory.z(),
    minoFactory.j(),
    minoFactory.t(),
]
