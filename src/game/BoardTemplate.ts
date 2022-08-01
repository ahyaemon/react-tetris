import {Board} from "./game";
import {Cell} from "./cell";

export type BoardTemplate = Board

// デバッグ用
// ミノのテンプレートが存在する行のみ console.log する
export function printBoardTemplate(templates: BoardTemplate[]) {
    const maps = templates.map(template => {
        return template
            .filter(row => {
                return !row.every(cell => cell === Cell.None )
            })
            .map(row => {
                return row.map(cell => {
                    switch (cell) {
                        case Cell.BlueTemplate: return "J"
                        case Cell.OrangeTemplate: return "L"
                        case Cell.RedTemplate: return "Z"
                        case Cell.GreenTemplate: return "S"
                        case Cell.PurpleTemplate: return "T"
                        case Cell.LightBlueTemplate: return "I"
                        case Cell.YellowTemplate: return "O"
                        default: return " "
                    }
                }).join("")
            })
    })

    console.log(maps)
}
