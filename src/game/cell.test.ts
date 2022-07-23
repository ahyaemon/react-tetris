import {Cell, createEmptyRow, createEmptyRows} from "./cell";

const c = Cell.None

test("createEmptyRow", () => {
    const actual = createEmptyRow(2)
    expect(actual).toStrictEqual([c, c])
})

test("createEmptyRows", () => {
    const actual = createEmptyRows(2, 3)
    expect(actual).toStrictEqual([[c, c, c], [c, c, c]])

    // 不変性確認
    actual[0][0] = Cell.Blue
    expect(actual).toStrictEqual([[Cell.Blue, c, c], [c, c, c]])
})
