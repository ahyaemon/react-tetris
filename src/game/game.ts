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

    public input(command: Command): GameState {
        if (command === Command.Up) {
            // mino を一番下まで落とす
            this.currentMino = this.drop()

            // rows を state().rows に置き換え（接地）
            this.rows = this.state.rows

            // 次のミノに切り替え
            this.currentMino = new CurrentMino(minoFactory.random(), { row: 0, col: 3 }, Direction.A)
        } else if (command === Command.Right) {
            this.currentMino = this.moveRight()
        } else if (command === Command.Down) {
            this.currentMino = this.moveDown()
        } else if (command === Command.Left) {
            this.currentMino = this.moveLeft()
        } else if (command === Command.RotationLeft) {
            // TODO SRS の導入
            this.currentMino = this.currentMino.rotationLeft()
        } else if (command === Command.RotationRight) {
            this.currentMino = this.currentMino.rotationRight()
        }
        return this.state
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
