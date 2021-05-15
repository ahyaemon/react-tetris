import {Direction, Mino, minoFactory} from "./mino";
import {Position} from "./potision";
import {Color} from "./color";
import {Command} from "./command";
import {Shape} from "./shape";

export type Cell = Color

type Row = Cell[]



class CurrentMino {

    constructor(
        readonly mino: Mino,
        readonly position: Position,
        readonly direction: Direction,
    ) {}

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
}

export type GameState = {
    rows: Row[]
}

export class Game {

    private static ncol = 10
    private static nrow = 20

    constructor(
        private currentMino: CurrentMino,
        private rows: Row[],
    ) {}

    static create(): Game {
        const rows = Array(this.nrow)
            .fill(0)
            .map(_ => Array(this.ncol).fill(Color.None))
        const currentMino = new CurrentMino(minoFactory.j(), { row: 0, col: 3 }, Direction.A)

        return new Game(currentMino, rows)
    }

    get state(): GameState {
        const rows = this.rows.map(row => row.map(cell => cell))
        this.currentMino.getShape().positions.forEach(position => {
            rows[this.currentMino.position.row + position.row][this.currentMino.position.col + position.col] = this.currentMino.mino.color
        })
        return { rows }
    }

    public input(command: Command): GameState {
        if (command === Command.Up) {
            // mino を一番下まで落とす
            this.drop()

            // rows を state().rows に置き換え
            this.rows = this.state.rows

            // 次のミノを表示
            this.currentMino = new CurrentMino(minoFactory.random(), { row: 0, col: 3 }, Direction.A)
        } else if (command === Command.Right) {
            this.moveRight()
        } else if (command === Command.Down) {
            this.moveDown()
        } else if (command === Command.Left) {
            this.moveLeft()
        } else if (command === Command.RotationLeft) {
            this.currentMino = this.currentMino.rotationLeft()
        } else if (command === Command.RotationRight) {
            this.currentMino = this.currentMino.rotationRight()
        }
        return this.state
    }

    private moveRight() {
        const nextMino = this.currentMino.moveRight()

        if (nextMino.rightCol() >= Game.ncol) {
            return
        }

        if (this.collided(nextMino)) {
            return
        }

        this.currentMino = nextMino
    }

    private moveLeft() {
        const nextMino = this.currentMino.moveLeft()

        if (nextMino.leftCol() < 0) {
            return
        }

        if(this.collided(nextMino)) {
            return
        }

        this.currentMino = nextMino
    }

    private moveDown() {
        const nextMino = this.currentMino.moveDown()

        if (nextMino.bottomRow() >= Game.nrow) {
            return
        }

        if(this.collided(nextMino)) {
            return
        }

        this.currentMino = nextMino
    }

    private drop() {
        while (true) {
            const nextMino = this.currentMino.moveDown()

            if (nextMino.bottomRow() >= Game.nrow) {
                break
            }

            if(this.collided(nextMino)) {
                break
            }

            this.currentMino = nextMino
        }
    }

    private collided(currentMino: CurrentMino): boolean {
        return currentMino.getShape().positions.map(position => {
            return {
                row: position.row + currentMino.position.row,
                col: position.col + currentMino.position.col,
            }
        }).find(p => {
            return this.rows[p.row][p.col] !== Color.None
        }) !== undefined
    }
}
