import {Game} from "./game";
import {Cell, createEmptyRows, Row} from "./cell";
import {Command} from "./command";
import {Seed} from "./seed";

const game = Game.create(new Seed(1))

describe("minoDroppedBoard", () => {

    const actual: Row[] = (() => {
        const rows = createEmptyRows(20, 10)
        rows[18][4] = Cell.Purple
        rows[19][3] = Cell.Purple
        rows[19][4] = Cell.Purple
        rows[19][5] = Cell.Purple
        return rows
    })()

    test("ミノが一番上にある時", () => {
        expect(game.minoDroppedBoard).toStrictEqual(actual)
    })

    test("ミノが一番下にある時", () => {
        let g = game
        for (let i = 0; i < 17; i++) {
            g = g.input(Command.Down)
        }

        expect(g.minoDroppedBoard).toStrictEqual(actual)
    })
})

describe("bug: ホールドするとネクストミノの生成がおかしくなる", () => {
    test("ホールドした時としない時にネクストミノが一致する", () => {
        const gameWithHold = game
            .input(Command.Hold)
            .input(Command.Up)
            .input(Command.Up)
        const mionsWithHold = gameWithHold.nextMinosHolder.minos.map(mino => mino.minoType)

        const gameWithoutHold = game
            .input(Command.Up)
            .input(Command.Up)
            .input(Command.Up)
        const minosWithoutHold = gameWithoutHold.nextMinosHolder.minos.map(mino => mino.minoType)

        expect(mionsWithHold).toStrictEqual(minosWithoutHold)
    })
})
