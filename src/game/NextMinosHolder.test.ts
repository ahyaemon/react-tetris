import {NextMinosHolder} from "./NextMinosHolder";
import {minoFactory} from "./mino";
import {Seed} from "./seed";
import {Random} from "./random";
import {removeFirstOf} from "../lib/array";

const seed = Seed.random()
const random = new Random(seed)

describe("pop", () => {

    test("pop 前に要素数が 6 つの場合、残り 5 つ", () => {
        const minos = [
            minoFactory.l(),
            minoFactory.o(),
            minoFactory.i(),
            minoFactory.s(),
            minoFactory.z(),
            minoFactory.t(),
        ]
        const holder = new NextMinosHolder(minos, seed, random)

        const [mino, restHolder] = holder.pop()

        expect(mino).toStrictEqual(minoFactory.l())
        expect(restHolder.minos.map(it => it.minoType)).toStrictEqual(removeFirstOf(minos).map(it => it.minoType))
    })

    test("pop 前に要素数が 5 つの場合、新たに 7 つプラスされて残りは 11", () => {
        const minos = [
            minoFactory.l(),
            minoFactory.o(),
            minoFactory.i(),
            minoFactory.s(),
            minoFactory.z(),
        ]
        const holder = new NextMinosHolder(minos, seed, random)

        const [mino, restHolder] = holder.pop()

        expect(mino).toStrictEqual(minoFactory.l())
        expect(restHolder.minos.length).toStrictEqual(11)
    })
})
