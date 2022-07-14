export enum Color {
    None = 'none',

    LightBlue = 'lightBlue',
    Yellow = 'yellow',
    Purple = 'purple',
    Green = 'green',
    Red = 'red',
    Orange = 'orange',
    Blue = 'blue',

    LightBlueGhost = 'lightBlue--ghost',
    YellowGhost = 'yellow--ghost',
    PurpleGhost = 'purple--ghost',
    GreenGhost = 'green--ghost',
    RedGhost = 'red--ghost',
    OrangeGhost = 'orange--ghost',
    BlueGhost = 'blue--ghost',

    LightBlueTemplate = 'lightBlue--template',
    YellowTemplate = 'yellow--template',
    PurpleTemplate = 'purple--template',
    GreenTemplate = 'green--template',
    RedTemplate = 'red--template',
    OrangeTemplate = 'orange--template',
    BlueTemplate = 'blue--template',
}

export function toGhost(color: Color): Color {
    if (color === Color.LightBlue) {
        return Color.LightBlueGhost
    } else if (color === Color.Yellow) {
        return Color.YellowGhost
    } else if (color === Color.Purple) {
        return Color.PurpleGhost
    } else if (color === Color.Green) {
        return Color.GreenGhost
    } else if (color === Color.Red){
        return Color.RedGhost
    } else if (color === Color.Orange) {
        return Color.OrangeGhost
    } else if (color === Color.Blue) {
        return Color.BlueGhost
    }

    return Color.None
}

export type Cell = Color

export type Row = Cell[]

export function isFilled(row: Row): boolean {
    return !row.includes(Color.None)
}

export function createEmptyRow(ncol: number): Row {
    return Array(ncol).fill(Color.None)
}
