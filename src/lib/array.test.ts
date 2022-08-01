import {lastOf, removeFirstOf, removeLastOf} from "./array";

describe("lastIOf", () => {

    test("配列が空じゃない時は最後の要素が取れる", () => {
        expect(lastOf([1, 2, 3])).toBe(3)
        expect(lastOf(["a", "b", "c"])).toBe("c")
    })

    test("配列が空の時はエラー", () => {
        expect(() => {lastOf([])}).toThrow(Error)
    })
})

describe("removeFirstOf", () => {

    test("配列が空じゃない時は、最初の要素を削除して残りの要素が取れる", () => {
        expect(removeFirstOf([1, 2, 3])).toStrictEqual([2, 3])
    })

    test("配列が空の時は空の配列が返ってくる", () => {
        expect(removeFirstOf([])).toStrictEqual([])
    })
})

describe("removeLastOf", () => {

    test("配列が空じゃない時は、最後の n 個の要素を削除して残りの要素が取れる", () => {
        expect(removeLastOf([1, 2, 3], 1)).toStrictEqual([1, 2])
        expect(removeLastOf([1, 2, 3], 2)).toStrictEqual([1])
    })

    test("配列が空の時は空の配列が返ってくる", () => {
        expect(removeLastOf([], 1)).toStrictEqual([])
        expect(removeLastOf([], 2)).toStrictEqual([])
    })
})
