import {rotateMatrix180, rotateMatrix270, rotateMatrix90} from "./lib/matrix";
import {Shape} from "./shape";

export class Rotation {
    constructor(
        readonly a: Shape,
        readonly b: Shape,
        readonly c: Shape,
        readonly d: Shape,
    ) {
    }

    public static fromMatrix(matrix: boolean[][]): Rotation {
        return new Rotation(
            Shape.fromMatrix(matrix),
            Shape.fromMatrix(rotateMatrix90(matrix)),
            Shape.fromMatrix(rotateMatrix180(matrix)),
            Shape.fromMatrix(rotateMatrix270(matrix)),
        )
    }
}
