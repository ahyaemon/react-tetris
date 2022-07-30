import {Game} from "./game";
import {Command} from "./command";
import {BoardTemplate} from "./BoardTemplate";
import {Cell, createEmptyRows} from "./cell";
import {PracticeInitializationProps} from "./Practice";
import {Seed} from "./seed";

export class Endless {

    private constructor(
        private readonly games: Game[],
        private readonly templates: BoardTemplate[],
        private readonly addedTemplatesNumbers: number[]
        // TODO back した時に、テンプレートをいくつ取り除く必要があるかを保持しておく
    ) {}

    public static create(games: Game[]): Endless {
        return new Endless(games, [], [])
    }

    get historySize(): number {
        return this.games.length
    }

    get currentGame(): Game {
        return this.games[0]
    }

    public input(command: Command): Endless {
        if (command === Command.Back) {
            if (this.games.length === 1) {
                return this
            }

            const newGame = this.games.slice(1)
            const i = this.addedTemplatesNumbers.slice(-1)[0]
            const newTemplates = this.templates.slice(0, -i)
            const newAddedTemplatesNumbers = this.addedTemplatesNumbers.slice(0, -1)
            return new Endless(newGame, newTemplates, newAddedTemplatesNumbers)
        }

        if (command === Command.NewGame) {
            return Endless.create([Game.create(Seed.random())])
        }

        if (command === Command.Retry) {
            return Endless.create(this.games.slice(-1))
        }

        const newGame = this.currentGame.input(command)

        if (command === Command.Up) {
            if (newGame.clearedRowCount > this.currentGame.clearedRowCount) {
                if (newGame.renCount() >= 2) {
                    const beforeRows = this.currentGame.minoDroppedBoard
                    return new Endless(
                        this.addGame(newGame),
                        [...this.templates, beforeRows],
                        [...this.addedTemplatesNumbers, 1],
                    )
                } else {
                    const beforeRowsWithoutMino = this.currentGame.rows
                    const beforeRows = this.currentGame.minoDroppedBoard
                    return new Endless(
                        this.addGame(newGame),
                        [...this.templates, beforeRowsWithoutMino, beforeRows],
                        [...this.addedTemplatesNumbers, 2],
                    )
                }
            }
            return new Endless(this.addGame(newGame), this.templates, [...this.addedTemplatesNumbers, 0])
        }

        if (command === Command.Hold) {
            return new Endless(this.addGame(newGame), this.templates, [...this.addedTemplatesNumbers, 0])
        }

        return new Endless(this.updateRecentlyGame(newGame), this.templates, this.addedTemplatesNumbers)
    }

    private addGame(game: Game): Game[] {
        return [game, ...this.games]
    }

    private updateRecentlyGame (game: Game): Game[] {
        return [game, ...this.games.slice(1, this.games.length)]
    }

    public createPracticeInitializationProps(): PracticeInitializationProps {
        const seed = this.games.slice(-1)[0].seed.value
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
