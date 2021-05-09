import {Position} from "./potision";
import {getRandomInt} from "./random";

export enum Color {
    None = 'none',
    LightBlue = 'lightBlue',
    Yellow = 'yellow',
    Purple = 'purple',
    Green = 'green',
    Red = 'red',
    Orange = 'orange',
    Blue = 'blue',
}

enum MinoType {
    I,
    O,
    T,
    S,
    Z,
    L,
    J,
}

export class Mino {

    constructor(
        readonly minoType: MinoType,
        readonly shape: Position[],
        readonly color: Color,
    ) {}

    rightCol = (): number => Math.max(...this.shape.map(p => p.col))

    leftCol = (): number => Math.min(...this.shape.map(p => p.col))

    bottomRow = (): number => Math.max(...this.shape.map(p => p.row))

    private shapeToIndex = (shape: boolean[][]): number[] => shape.flatMap(
        ar => ar
            .map((b, i) => {
                return { b, i }
            })
            .filter(b => b.b)
            .map(b => b.i)
    )
}

export const minoFactory = {
    i(): Mino {
        return new Mino(
            MinoType.I,
            [
                { row: 0, col: 0 },
                { row: 1, col: 0 },
                { row: 2, col: 0 },
                { row: 3, col: 0 },
            ],
            Color.LightBlue,
        )
    },
    o(): Mino {
        return new Mino(
            MinoType.O,
            [
                { row: 0, col: 0 },
                { row: 0, col: 1 },
                { row: 1, col: 0 },
                { row: 1, col: 1 },
            ],
            Color.Yellow,
        )
    },
    t(): Mino {
        return new Mino(
            MinoType.T,
            [
                { row: 0, col: 1 },
                { row: 1, col: 0 },
                { row: 1, col: 1 },
                { row: 1, col: 2 },
            ],
            Color.Purple,
        )
    },
    s(): Mino {
        return new Mino(
            MinoType.S,
            [
                { row: 0, col: 1 },
                { row: 0, col: 2 },
                { row: 1, col: 0 },
                { row: 1, col: 1 },
            ],
            Color.Green,
        )
    },
    z(): Mino {
        return new Mino(
            MinoType.Z,
            [
                { row: 0, col: 0 },
                { row: 0, col: 1 },
                { row: 1, col: 1 },
                { row: 1, col: 2 },
            ],
            Color.Red,
        )
    },
    l(): Mino {
        return new Mino(
            MinoType.L,
            [
                { row: 0, col: 2 },
                { row: 1, col: 0 },
                { row: 1, col: 1 },
                { row: 1, col: 2 },
            ],
            Color.Orange,
        )
    },
    j(): Mino {
        return new Mino(
            MinoType.J,
            [
                { row: 0, col: 0 },
                { row: 1, col: 0 },
                { row: 1, col: 1 },
                { row: 1, col: 2 },
            ],
            Color.Blue,
        )
    },
    random(): Mino {
        const rand =　getRandomInt(7)
        switch (rand) {
            case 0: return this.i()
            case 1: return this.o()
            case 2: return this.t()
            case 3: return this.s()
            case 4: return this.z()
            case 5: return this.l()
            case 6: return this.j()
            default: throw Error("failed to create random mino")
        }
    }
}

const transpose = (a: any[][]) => a[0].map((_, c) => a.map(r => r[c]));
