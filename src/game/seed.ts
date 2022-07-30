export class Seed {

    private static max: number = 99_999_999

    value: number

    constructor(value: number) {
        if (value > 99_999_999) {
            throw Error("seed には 8 桁以内の数値を設定して")
        }

        if (value < 0) {
            throw Error("seed には 0 以上の数値を設定して")
        }

        this.value = value
    }

    static random(): Seed {
        return new Seed(Math.floor(Math.random() * Seed.max))
    }
}
