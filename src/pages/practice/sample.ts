import {Color} from "../../game/color";

function createRows(): Color[][] {
    const rows = []
    for (let i = 0; i < 20; i++) {
        const colors = []
        for (let j = 0; j < 10; j++) {
            colors.push(Color.None)
        }
        rows.push(colors)
    }
    return rows
}

function rows1(): Color[][] {
    const rows = createRows()

    rows[19][3] = Color.LightBlueTemplate
    rows[19][4] = Color.LightBlueTemplate
    rows[19][5] = Color.LightBlueTemplate
    rows[19][6] = Color.LightBlueTemplate

    rows[18][0] = Color.YellowTemplate
    rows[18][1] = Color.YellowTemplate
    rows[19][0] = Color.YellowTemplate
    rows[19][1] = Color.YellowTemplate

    rows[17][3] = Color.RedTemplate
    rows[18][2] = Color.RedTemplate
    rows[18][3] = Color.RedTemplate
    rows[19][2] = Color.RedTemplate

    rows[17][5] = Color.GreenTemplate
    rows[17][6] = Color.GreenTemplate
    rows[18][4] = Color.GreenTemplate
    rows[18][5] = Color.GreenTemplate

    rows[17][9] = Color.BlueTemplate
    rows[18][9] = Color.BlueTemplate
    rows[19][8] = Color.BlueTemplate
    rows[19][9] = Color.BlueTemplate

    rows[16][4] = Color.OrangeTemplate
    rows[16][5] = Color.OrangeTemplate
    rows[16][6] = Color.OrangeTemplate
    rows[17][4] = Color.OrangeTemplate

    return rows
}

function rows2(): Color[][] {
    const rows = createRows()

    rows[19][3] = Color.LightBlueTemplate
    rows[19][4] = Color.LightBlueTemplate
    rows[19][5] = Color.LightBlueTemplate
    rows[19][6] = Color.LightBlueTemplate

    rows[18][0] = Color.YellowTemplate
    rows[18][1] = Color.YellowTemplate
    rows[19][0] = Color.YellowTemplate
    rows[19][1] = Color.YellowTemplate

    rows[17][3] = Color.RedTemplate
    rows[18][2] = Color.RedTemplate
    rows[18][3] = Color.RedTemplate
    rows[19][2] = Color.RedTemplate

    rows[17][5] = Color.GreenTemplate
    rows[17][6] = Color.GreenTemplate
    rows[18][4] = Color.GreenTemplate
    rows[18][5] = Color.GreenTemplate

    rows[17][9] = Color.BlueTemplate
    rows[18][9] = Color.BlueTemplate
    rows[19][8] = Color.BlueTemplate
    rows[19][9] = Color.BlueTemplate

    rows[16][4] = Color.OrangeTemplate
    rows[16][5] = Color.OrangeTemplate
    rows[16][6] = Color.OrangeTemplate
    rows[17][4] = Color.OrangeTemplate

    rows[18][6] = Color.PurpleTemplate
    rows[18][7] = Color.PurpleTemplate
    rows[18][8] = Color.PurpleTemplate
    rows[19][7] = Color.PurpleTemplate

    return rows
}

export const sampleTemplates = [
    { rows: rows1() },
    { rows: rows2() },
]