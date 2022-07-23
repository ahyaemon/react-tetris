import {Game} from "./game";
import {Command} from "./command";
import {BoardTemplate} from "./BoardTemplate";
import {Cell, createEmptyRows} from "./cell";
import {PracticeInitializationProps} from "./Practice";

export class Endless {

    private constructor(
        private readonly games: Game[],
        private readonly templates: BoardTemplate[],
    ) {}

    public static create(games: Game[]): Endless {
        return new Endless(games, [])
    }

    get historySize(): number {
        return this.games.length
    }

    get currentGame(): Game {
        return this.games[0]
    }

    public input(command: Command): Endless {
        if (command === Command.Back) {
            return new Endless(this.games.slice(1), this.templates)
        }

        if (command === Command.NewGame) {
            return new Endless([Game.create(Math.random() * 1000000)], this.templates)
        }

        if (command === Command.Retry) {
            return new Endless(this.games.slice(-1), this.templates)
        }

        const newGame = this.currentGame.input(command)

        if (command === Command.Up) {
            if (newGame.clearedRowCount > this.currentGame.clearedRowCount) {
                if (newGame.renCount() >= 2) {
                    const beforeRows = this.currentGame.minoDroppedBoard
                    return new Endless(this.addGame(newGame), [...this.templates, beforeRows])
                } else {
                    const beforeRowsWithoutMino = this.currentGame.rows
                    const beforeRows = this.currentGame.minoDroppedBoard
                    return new Endless(this.addGame(newGame), [...this.templates, beforeRowsWithoutMino, beforeRows])
                }
            }
            return new Endless(this.addGame(newGame), this.templates)
        }

        if (command === Command.Hold) {
            return new Endless(this.addGame(newGame), this.templates)
        }

        return new Endless(this.updateRecentlyGame(newGame), this.templates)
    }

    private addGame(game: Game): Game[] {
        return [game, ...this.games]
    }

    private updateRecentlyGame (game: Game): Game[] {
        return [game, ...this.games.slice(1, this.games.length)]
    }

    public createPracticeInitializationProps(): PracticeInitializationProps {
        const seed = this.games.slice(-1)[0].seed
        const templates = this.templates.map(rows => {
            return rows.map(row => {
                return row.map(cell =>{
                    return toTemplateMap.get(cell)!
                })
            })
        })
        return { templates: [...templates, createEmptyRows(20, 10)], seed }
    }
}

const toTemplateMap = new Map([
    [Cell.Orange, Cell.OrangeTemplate],
    [Cell.Purple, Cell.PurpleTemplate],
    [Cell.Red, Cell.RedTemplate],
    [Cell.Green, Cell.GreenTemplate],
    [Cell.Yellow, Cell.YellowTemplate],
    [Cell.Blue, Cell.BlueTemplate],
    [Cell.LightBlue, Cell.LightBlueTemplate],
    [Cell.None, Cell.None],
])
