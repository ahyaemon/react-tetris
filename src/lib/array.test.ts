import {lastOf} from "./array";

describe("lastIOf", () => {

    test("配列が空じゃない時は最後の要素が取れる", () => {
        expect(lastOf([1, 2, 3])).toBe(3)
        expect(lastOf(["a", "b", "c"])).toBe("c")
    })

    test("配列が空の時は undefined", () => {
        expect(lastOf([])).toBeUndefined()
    })
})
