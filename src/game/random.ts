import seedrandom from "seedrandom";
import {Seed} from "./seed";

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export class Random {

    private prng: PRNG

    public _value: number

    constructor(readonly seed: Seed) {
        this.prng = seedrandom(seed.value.toString())
        this._value = this.prng.int32()
    }

    public value(max: number): number {
        return Math.abs(this._value) % (max + 1)
    }

    public nextRandom(): Random {
        return new Random(new Seed(this.value(1000000)))
    }
}

export function shuffle<T>(ar: T[], random: Random): T[] {
    let result = [...ar]
    let r = random.nextRandom()

    for (let i = result.length; 1 < i; i--) {
        const k = r.value(result.length - 1) as number
        [result[k], result[i - 1]] = [result[i - 1], result[k]]
        r = r.nextRandom()
    }

    return result
}

interface PRNG {
    (): number;
    double(): number;
    int32(): number;
    quick(): number;
    state(): seedrandom.State;
}
