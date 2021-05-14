import {Position} from "./potision";
import {getRandomInt} from "./random";
import {rotateMatrix180, rotateMatrix270, rotateMatrix90} from "./lib/matrix";

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

class Rotation {
    constructor(
        readonly a: Shape,
        readonly b: Shape,
        readonly c: Shape,
        readonly d: Shape,
    ) {}

    public static fromMatrix(matrix: boolean[][]): Rotation {
        return new Rotation(
            Shape.fromMatrix(matrix),
            Shape.fromMatrix(rotateMatrix90(matrix)),
            Shape.fromMatrix(rotateMatrix180(matrix)),
            Shape.fromMatrix(rotateMatrix270(matrix)),
        )
    }
}

const rotations = {
    i: Rotation.fromMatrix([
        [false, false, false, false],
        [true, true, true, true],
        [false, false, false, false],
        [false, false, false, false],
    ]),
    o: Rotation.fromMatrix([
        [true, true],
        [true, true],
    ]),
    t: Rotation.fromMatrix([
        [false, true, false],
        [true, true, true],
        [false, false, false],
    ]),
    s: Rotation.fromMatrix([
        [false, true, true],
        [true, true, false],
        [false, false, false],
    ]),
    z: Rotation.fromMatrix([
        [true, true, false],
        [false, true, true],
        [false, false, false],
    ]),
    l: Rotation.fromMatrix([
        [false, false, true],
        [true, true, true],
        [false, false, true],
    ]),
    j: Rotation.fromMatrix([
        [true, false, false],
        [true, true, true],
        [false, false, false],
    ]),
}

class Shape {
    constructor(
        readonly positions: Position[]
    ) {}

    rightCol = (): number => Math.max(...this.positions.map(p => p.col))

    leftCol = (): number => Math.min(...this.positions.map(p => p.col))

    bottomRow = (): number => Math.max(...this.positions.map(p => p.row))

    public static fromMatrix(matrix: boolean[][]): Shape {
        return new Shape(
            matrix.flatMap((bs, irow) => {
                return bs.map((b, icol) => {
                    return { b: b, position: { row: irow, col: icol } }
                }).filter(b => b.b)
            }).map(bs => bs.position)
        )
    }
}

export class Mino {

    constructor(
        readonly minoType: MinoType,
        readonly rotation: Rotation,
        readonly color: Color,
    ) {}
}

export const minoFactory = {
    i(): Mino {
        return new Mino(
            MinoType.I,
            rotations.i,
            Color.LightBlue,
        )
    },
    o(): Mino {
        return new Mino(
            MinoType.O,
            rotations.o,
            Color.Yellow,
        )
    },
    t(): Mino {
        return new Mino(
            MinoType.T,
            rotations.t,
            Color.Purple,
        )
    },
    s(): Mino {
        return new Mino(
            MinoType.S,
            rotations.s,
            Color.Green,
        )
    },
    z(): Mino {
        return new Mino(
            MinoType.Z,
            rotations.z,
            Color.Red,
        )
    },
    l(): Mino {
        return new Mino(
            MinoType.L,
            rotations.l,
            Color.Orange,
        )
    },
    j(): Mino {
        return new Mino(
            MinoType.J,
            rotations.j,
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

function rotationRightL(shape: Position[]): Position[] {
    return shape
}

function rotationRightNotL(shape: Position[]): Position[] {
    // TODO
    return shape
}

export function rotationRight(mino: Mino): Mino {
    // const shape = mino.minoType === MinoType.L ? rotationRightL(mino.shape) : rotationRightNotL(mino.shape)
    // return { ...mino, shape }
    return mino
}
