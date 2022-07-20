import {Board, Game} from "./game";
import {Command} from "./command";
import {Cell, Row} from "./cell";

type BoardTemplate = Board

// PracticeGame, EndlessGame の両クラスを作った方が良い？
// で、両方とも Command を受け取る input メソッドを持っていて、
// コマンドによる動作の振り分けはその中で行う
// back とか hold もコマンドになりそう
// ストアを使う usePracticeProps とかがシンプルになりそう
export class Practice {

    private constructor(
        private readonly games: Game[],
        private readonly templates: BoardTemplate[],
        private readonly templateIndices: number[],
    ) {}

    private fromTemplateMap = new Map([
        [Cell.OrangeTemplate, Cell.Orange],
        [Cell.PurpleTemplate, Cell.Purple],
        [Cell.RedTemplate, Cell.Red],
        [Cell.GreenTemplate, Cell.Green],
        [Cell.YellowTemplate, Cell.Yellow],
        [Cell.BlueTemplate, Cell.Blue],
        [Cell.LightBlueTemplate, Cell.LightBlue],
        [Cell.None, Cell.None],
    ])

    public static create(game: Game, templates: BoardTemplate[]): Practice {
        return new Practice([game], templates, [0])
    }

    get currentGame(): Game {
        return this.games[0]
    }

    get historySize(): number {
        return this.games.length
    }

    public input(command: Command): Practice {
        if (command === Command.Back) {
            return new Practice(this.games.slice(1), this.templates, this.templateIndices.slice(0, this.templateIndices.length - 1))
        }

        if (command === Command.NewGame) {
            throw Error("練習モードで想定されない動作です")
        }

        if (command === Command.Retry) {
            return new Practice(this.games.slice(-1), this.templates, this.templateIndices)
        }

        const newGame = this.currentGame.input(command)

        if (command === Command.Up) {
            const nextIndex = (this.matchTemplate(newGame.rows) || this.matchTemplate(this.currentGame.board)) ?
                this.currentTemplateIndex + 1:
                this.currentTemplateIndex

            return new Practice(this.addGame(newGame), this.templates, [...this.templateIndices, nextIndex])
        }

        if (command === Command.Hold) {
            return new Practice(this.addGame(newGame), this.templates, this.templateIndices)
        }

        return new Practice(this.updateRecentlyGame(newGame), this.templates, this.templateIndices)
    }

    private templateToRows(): Row[] {
        return this.currentTemplate.map(
            row => row.map(
                cell => this.fromTemplateMap.get(cell)!
            )
        )
    }

    // FIXME 下の行から判定していった方が早い
    private matchTemplate(rows: Row[]): boolean {
        const templateRows = this.templateToRows()
        for(let i = 0; i < 20; i++) {
            for(let j = 0; j < 10; j++) {
                if (rows[i][j] !== templateRows[i][j]) {
                    return false
                }
            }
        }
        return true
    }

    private addGame(game: Game): Game[] {
        return [game, ...this.games]
    }

    private updateRecentlyGame (game: Game): Game[] {
        return [game, ...this.games.slice(1, this.games.length)]
    }

    private get currentTemplateIndex(): number {
        return this.templateIndices.slice(-1)[0]
    }

    private get currentTemplate(): BoardTemplate {
        return this.templates[this.currentTemplateIndex]
    }

    get boardWithTemplate(): Board {
        return this.currentGame.board.map((row, irow) =>
            row.map((cell, icell) =>
                cell === Cell.None ? this.currentTemplate[irow][icell] : cell
            )
        )
    }

    get isCleared(): boolean {
        return this.currentTemplateIndex === this.templates.length - 1
    }
}
