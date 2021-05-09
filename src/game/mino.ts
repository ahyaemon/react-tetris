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
        readonly shape: boolean[][],
        readonly color: Color,
    ) {}

    rightPosition = (): number => Math.max(...this.shapeToIndex(this.shape))

    leftPosition = (): number => Math.min(...this.shapeToIndex(this.shape))

    bottomPosition = (): number => Math.max(...this.shapeToIndex(transpose(this.shape)))

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
    j(): Mino {
        return new Mino(
            MinoType.J,
            [
                [false, true, false],
                [false, true, false],
                [true, true, false],
            ],
            Color.Orange,
        )
    }
}

const transpose = (a: any[][]) => a[0].map((_, c) => a.map(r => r[c]));
