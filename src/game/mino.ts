import {getRandomInt, Random, shuffle} from "./random";
import {Cell} from "./cell";
import {Rotation} from "./rotation";
import {Shape} from "./shape";

export enum MinoType {
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
        readonly color: Cell,
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

    public getMinoAlphabet(): 'l' | 'j' | 'i' | 'o' | 's' | 't' | 'z' {
        if (this.minoType === MinoType.L) {
            return 'l'
        } else if (this.minoType === MinoType.J) {
            return 'j'
        } else if (this.minoType === MinoType.I) {
            return 'i'
        } else if (this.minoType === MinoType.O) {
            return 'o'
        } else if (this.minoType === MinoType.S) {
            return 's'
        } else if (this.minoType === MinoType.T) {
            return 't'
        } else if (this.minoType === MinoType.Z) {
            return 'z'
        }

        throw Error("no mino types found")
    }

    get isIMino(): boolean {
        return this.minoType === MinoType.I
    }
}

export const minoFactory = {
    i(): Mino {
        return new Mino(
            MinoType.I,
            rotations.i,
            Cell.LightBlue,
        )
    },
    o(): Mino {
        return new Mino(
            MinoType.O,
            rotations.o,
            Cell.Yellow,
        )
    },
    t(): Mino {
        return new Mino(
            MinoType.T,
            rotations.t,
            Cell.Purple,
        )
    },
    s(): Mino {
        return new Mino(
            MinoType.S,
            rotations.s,
            Cell.Green,
        )
    },
    z(): Mino {
        return new Mino(
            MinoType.Z,
            rotations.z,
            Cell.Red,
        )
    },
    l(): Mino {
        return new Mino(
            MinoType.L,
            rotations.l,
            Cell.Orange,
        )
    },
    j(): Mino {
        return new Mino(
            MinoType.J,
            rotations.j,
            Cell.Blue,
        )
    },
    random(): Mino {
        const rand = getRandomInt(7)
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
