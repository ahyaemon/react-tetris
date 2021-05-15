import {Position} from "./potision";

export class Shape {
    constructor(
        readonly positions: Position[]
    ) {
    }

    rightCol = (): number => Math.max(...this.positions.map(p => p.col))

    leftCol = (): number => Math.min(...this.positions.map(p => p.col))

    bottomRow = (): number => Math.max(...this.positions.map(p => p.row))

    public static fromMatrix(matrix: boolean[][]): Shape {
        return new Shape(
            matrix.flatMap((bs, irow) => {
                return bs.map((b, icol) => {
                    return {b: b, position: {row: irow, col: icol}}
                }).filter(b => b.b)
            }).map(bs => bs.position)
        )
    }
}
