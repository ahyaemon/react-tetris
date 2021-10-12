import {getRandomInt, Random, shuffle} from "./random";
import {Color} from "./color";
import {Rotation} from "./rotation";
import {Shape} from "./shape";

enum MinoType {
    I,
    O,
    T,
    S,
    Z,
    L,
    J,
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
        [false, false, false],
    ]),
    j: Rotation.fromMatrix([
        [true, false, false],
        [true, true, true],
        [false, false, false],
    ]),
}

export enum Direction {
    A,
    B,
    C,
    D
}

export class Mino {

    constructor(
        readonly minoType: MinoType,
        readonly rotation: Rotation,
        readonly color: Color,
    ) {}

    public getShape(direction: Direction): Shape {
        if (direction === Direction.A) {
            return this.rotation.a
        } else if (direction === Direction.B) {
            return this.rotation.b
        } else if (direction === Direction.C) {
            return this.rotation.c
        } else if (direction === Direction.D) {
            return this.rotation.d
        }
        throw Error("no direction found")
    }
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
    },
    createMinoSets(random: Random): Mino[] {
        const ar = [
            this.l(),
            this.s(),
            this.i(),
            this.j(),
            this.z(),
            this.o(),
            this.t()
        ]
        return shuffle(ar, random)
    }
}
