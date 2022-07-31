export class Seed {

    static max: number = 99_999_999

    static min: number = 0

    value: number

    constructor(value: number) {
        if (value > Seed.max) {
            throw Error("seed には 8 桁以内の数値を設定して")
        }

        if (value < Seed.min) {
            throw Error("seed には 0 以上の数値を設定して")
        }

        this.value = value
    }

    static random(): Seed {
        return new Seed(Math.floor(Math.random() * Seed.max))
    }
}
