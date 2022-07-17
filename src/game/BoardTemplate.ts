import {Board} from "./game";
import {Cell, Row} from "./cell";

export type BoardTemplate = Board

const fromTemplateMap = new Map([
    [Cell.OrangeTemplate, Cell.Orange],
    [Cell.PurpleTemplate, Cell.Purple],
    [Cell.RedTemplate, Cell.Red],
    [Cell.GreenTemplate, Cell.Green],
    [Cell.YellowTemplate, Cell.Yellow],
    [Cell.BlueTemplate, Cell.Blue],
    [Cell.LightBlueTemplate, Cell.LightBlue],
    [Cell.None, Cell.None],
])

function templateToRows(template: BoardTemplate): Row[] {
    return template.map(
        row => row.map(
            cell => fromTemplateMap.get(cell)!
        )
    )
}

export function matchTemplate(rows: Row[], template: BoardTemplate): boolean {
    const templateRows = templateToRows(template)
    for(let i = 0; i < 20; i++) {
        for(let j = 0; j < 10; j++) {
            if (rows[i][j] !== templateRows[i][j]) {
                return false
            }
        }
    }
    return true
}

export function createBoardStateWithTemplate(template: BoardTemplate, boardState: Board): Board {
    const rows = []
    for (let i = 0; i < 20; i++) {
        const colors = []
        for (let j = 0; j < 10; j++) {
            if (boardState[i][j] === Cell.None) {
                colors.push(template[i][j])
            } else {
                colors.push(boardState[i][j])
            }

        }
        rows.push(colors)
    }
    return rows
}
