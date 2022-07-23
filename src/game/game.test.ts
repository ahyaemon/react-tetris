import {Game} from "./game";
import {CurrentMino} from "./CurrentMino";
import {Cell, createEmptyRows, Row} from "./cell";
import {Random} from "./random";
import {RenCounter} from "./RenCounter";
import {minoFactory} from "./mino";
import {Command} from "./command";

const seed = Math.random() * 1000000

const game = new Game(
    CurrentMino.create(minoFactory.s()),
    createEmptyRows(20, 10),
    null,
    [],
    new Random(seed),
    seed,
    0,
    RenCounter.create()
)

describe("minoDroppedBoard", () => {

    const actual: Row[] = (() => {
        const rows = createEmptyRows(20, 10)
        rows[18][4] = Cell.Green
        rows[18][5] = Cell.Green
        rows[19][3] = Cell.Green
        rows[19][4] = Cell.Green
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
