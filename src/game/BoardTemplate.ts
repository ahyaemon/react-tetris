import {Board} from "./game";
import {Color, Row} from "./color";

export type BoardTemplate = Board

function createTemplateMap(): Map<Color, Color> {
    const map = new Map()
    map.set(Color.OrangeTemplate, Color.Orange)
    map.set(Color.PurpleTemplate, Color.Purple)
    map.set(Color.RedTemplate, Color.Red)
    map.set(Color.GreenTemplate, Color.Green)
    map.set(Color.YellowTemplate, Color.Yellow)
    map.set(Color.BlueTemplate, Color.Blue)
    map.set(Color.LightBlueTemplate, Color.LightBlue)
    map.set(Color.None, Color.None)
    return map
}

const templateMap = createTemplateMap()

function templateToRows(template: BoardTemplate): Row[] {
    return template.rows.map(
        row => row.map(
            cell => templateMap.get(cell)!
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
            if (boardState.rows[i][j] === Color.None) {
                colors.push(template.rows[i][j])
            } else {
                colors.push(boardState.rows[i][j])
            }

        }
        rows.push(colors)
    }
    return { rows }
}
