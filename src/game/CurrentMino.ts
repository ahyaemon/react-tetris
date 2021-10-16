import {Direction, Mino} from "./mino";
import {Position} from "./potision";
import {Shape} from "./shape";
import {Color, Row} from "./color";

export class CurrentMino {

    private constructor(
        readonly mino: Mino,
        readonly position: Position,
        readonly direction: Direction,
    ) {}

    static create(mino: Mino): CurrentMino {
        return new CurrentMino(mino, { row: 0, col: 3 }, Direction.A)
    }

    public copy(): CurrentMino {
        return new CurrentMino(this.mino, { row: this.position.row, col: this.position.col }, this.direction)
    }

    public getShape(): Shape {
        return this.mino.getShape(this.direction)
    }

    public rotationRight(): CurrentMino {
        if (this.direction === Direction.A) {
            return new CurrentMino(this.mino, this.position, Direction.B)
        } else if (this.direction === Direction.B) {
            return new CurrentMino(this.mino, this.position, Direction.C)
        } else if (this.direction === Direction.C) {
            return new CurrentMino(this.mino, this.position, Direction.D)
        } else if (this.direction === Direction.D) {
            return new CurrentMino(this.mino, this.position, Direction.A)
        }

        throw Error('invalid direction found: ' + this.direction)
    }

    public rotationLeft(): CurrentMino {
        if (this.direction === Direction.A) {
            return new CurrentMino(this.mino, this.position, Direction.D)
        } else if (this.direction === Direction.B) {
            return new CurrentMino(this.mino, this.position, Direction.A)
        } else if (this.direction === Direction.C) {
            return new CurrentMino(this.mino, this.position, Direction.B)
        } else if (this.direction === Direction.D) {
            return new CurrentMino(this.mino, this.position, Direction.C)
        }

        throw Error('invalid direction found: ' + this.direction)
    }

    public moveRight(): CurrentMino {
        return this.move({ row: this.position.row, col: this.position.col + 1 })
    }

    public moveLeft(): CurrentMino {
        return this.move({ row: this.position.row, col: this.position.col - 1 })
    }

    public moveDown(): CurrentMino {
        return this.move({ row: this.position.row + 1, col: this.position.col })
    }

    private move(position: Position): CurrentMino {
        return new CurrentMino(this.mino, position, this.direction)
    }

    public rightCol(): number {
        return this.position.col + this.getShape().rightCol()
    }

    public leftCol(): number {
        return this.position.col + this.getShape().leftCol()
    }

    public bottomRow(): number {
        return this.position.row + this.getShape().bottomRow()
    }

    public cellPositions(): Position[] {
        return this.getShape().positions.map(position => {
            return {
                row: position.row + this.position.row,
                col: position.col + this.position.col,
            }
        })
    }

    public collided(rows: Row[]): boolean {
        return this.cellPositions().find(p => {
            return rows[p.row][p.col] !== Color.None
        }) !== undefined
    }
}
