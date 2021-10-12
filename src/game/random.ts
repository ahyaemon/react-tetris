import seedrandom from "seedrandom";

export function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export class Random {

    private prng: PRNG

    constructor(readonly seed: number) {
        this.prng = seedrandom(seed.toString())
    }

    public next(max: number): number {
        return Math.abs(this.prng.int32()) % (max + 1)
    }

    public nextRandom(): Random {
        return new Random(this.next(1000000))
    }
}

// FIXME random に対して副作用がある
export function shuffle<T>(ar: T[], random: Random): T[] {
    let result = [...ar]

    for (let i = result.length; 1 < i; i--) {
        const k = random.next(result.length - 1) as number
        [result[k], result[i - 1]] = [result[i - 1], result[k]]
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
