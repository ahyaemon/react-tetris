export enum Cell {
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

const toGhostMap = new Map([
    [Cell.LightBlue, Cell.LightBlueGhost],
    [Cell.Yellow, Cell.YellowGhost],
    [Cell.Purple, Cell.PurpleGhost],
    [Cell.Green, Cell.GreenGhost],
    [Cell.Red, Cell.RedGhost],
    [Cell.Orange, Cell.OrangeGhost],
    [Cell.Blue, Cell.BlueGhost],
])

export function toGhost(cell: Cell): Cell {
    return toGhostMap.get(cell) ?? Cell.None
}

export type Row = Cell[]

export function isFilled(row: Row): boolean {
    return !row.includes(Cell.None)
}

export function createEmptyRow(ncol: number): Row {
    return Array(ncol).fill(Cell.None)
}

export function createEmptyRows(nrow: number, ncol: number): Row[] {
    const ar = Array(nrow)
    for (let i = 0; i < nrow; i++) {
        ar[i] = createEmptyRow(ncol)
    }
    return ar
}
