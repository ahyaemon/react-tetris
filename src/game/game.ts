import {Direction, minoFactory} from "./mino";
import {Color, Row, toGhost} from "./color";
import {Command} from "./command";
import {CurrentMino} from "./CurrentMino";

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
        // 地形をコピー
        const rows = this.rows.map(row => row.map(cell => cell))

        // ゴーストブロックの表示
        const ghost = this.drop()
        ghost.getShape().positions.forEach(position => {
            rows[ghost.position.row + position.row][ghost.position.col + position.col] = toGhost(this.currentMino.mino.color)
        })

        // 現在のミノを表示
        this.currentMino.getShape().positions.forEach(position => {
            rows[this.currentMino.position.row + position.row][this.currentMino.position.col + position.col] = this.currentMino.mino.color
        })

        return { rows }
    }

    public input(command: Command): Game {
        if (command === Command.Up) {
            // mino を一番下まで落とす
            const droppedMino = this.drop()
            const newGame = new Game(droppedMino, this.rows)

            // rows を state().rows に置き換え（接地）
            const rows = newGame.state.rows

            // 次のミノに切り替え
            const currentMino = new CurrentMino(minoFactory.random(), { row: 0, col: 3 }, Direction.A)
            return new Game(currentMino, rows)
        } else if (command === Command.Right) {
            return new Game(this.moveRight(), this.rows)
        } else if (command === Command.Down) {
            return new Game(this.moveDown(), this.rows)
        } else if (command === Command.Left) {
            return new Game(this.moveLeft(), this.rows)
        } else if (command === Command.RotationLeft) {
            return new Game(this.currentMino.rotationLeft(), this.rows)
        } else if (command === Command.RotationRight) {
            return new Game(this.currentMino.rotationRight(), this.rows)
        } else {
            throw Error("no command found")
        }
    }

    private moveRight(): CurrentMino {
        const nextMino = this.currentMino.moveRight()

        if (nextMino.rightCol() >= Game.ncol) {
            return this.currentMino
        }

        if (nextMino.collided(this.rows)) {
            return this.currentMino
        }

        return nextMino
    }

    private moveLeft(): CurrentMino {
        const nextMino = this.currentMino.moveLeft()

        if (nextMino.leftCol() < 0) {
            return this.currentMino
        }

        if(nextMino.collided(this.rows)) {
            return this.currentMino
        }

        return nextMino
    }

    private moveDown(): CurrentMino {
        const nextMino = this.currentMino.moveDown()

        if (nextMino.bottomRow() >= Game.nrow) {
            return this.currentMino
        }

        if(nextMino.collided(this.rows)) {
            return this.currentMino
        }

        return nextMino
    }

    private drop(): CurrentMino {
        let m = this.currentMino.copy()
        while (true) {
            const nextMino = m.moveDown()

            if (nextMino.bottomRow() >= Game.nrow) {
                break
            }

            if(nextMino.collided(this.rows)) {
                break
            }

            m = nextMino
        }
        return m
    }
}
