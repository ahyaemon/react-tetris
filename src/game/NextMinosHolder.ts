import {Mino, minoFactory} from "./mino";
import {Seed} from "./seed";
import {Random} from "./random";
import {removeFirstOf} from "../lib/array";

export class NextMinosHolder {

    constructor(
        readonly minos: Mino[],
        readonly seed: Seed,
        readonly random: Random,
    ) {}

    static create(seed: Seed): NextMinosHolder {
        const random = new Random(seed)
        const minoSets = minoFactory.createMinoSets(random.nextRandom())
        return new NextMinosHolder(minoSets, seed, random)
    }

    /**
     *  「最初のミノ」と「残りのミノを保持する NextMinosHolder」を返す。
     *  残りが 5 個以下になったら足して返す。
     *
     *  @returns Mino: 最初のミノ, NextMinosHolder: 残りのミノを保持する NextMinosHolder
     */
    pop(): [Mino, NextMinosHolder] {
        if (this.minos.length <= 5) {
            // nextMinos が 5 個以下の時、新たに random を作って次の 7 個を得る
            const nextRandom = this.random.nextRandom()
            const nextMinos = [...this.minos, ...minoFactory.createMinoSets(nextRandom.nextRandom())]
            const first = nextMinos[0]
            const restHolder = new NextMinosHolder(removeFirstOf(nextMinos), this.seed, nextRandom)
            return [first, restHolder]
        } else {
            const first = this.minos[0]
            const restHolder = new NextMinosHolder(removeFirstOf(this.minos), this.seed, this.random)
            return [first, restHolder]
        }
    }
}
