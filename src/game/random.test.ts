import {Random, shuffle} from "./random";
import {Seed} from "./seed";

test("shuffleした後にrandomが変更されていないこと", () => {
  const seed = new Seed(123456)
  const random = new Random(seed)
  const ar = [1, 2, 3, 4, 5, 6]
  const shuffled = shuffle(ar, random)

  expect(shuffled).toStrictEqual([1, 3, 6, 4, 2, 5])
  expect(random._value).toStrictEqual(new Random(seed)._value)
})
