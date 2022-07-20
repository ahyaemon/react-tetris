import {Game} from "./game";
import {Command} from "./command";

export class Endless {

    private constructor(
        private readonly games: Game[],
    ) {}

    public static create(games: Game[]): Endless {
        return new Endless(games)
    }

    get historySize(): number {
        return this.games.length
    }

    get currentGame(): Game {
        return this.games[0]
    }

    public input(command: Command): Endless {
        if (command === Command.Back) {
            return new Endless(this.games.slice(1))
        }

        if (command === Command.NewGame) {
            return new Endless([Game.create(Math.random() * 1000000)])
        }

        if (command === Command.Retry) {
            return new Endless(this.games.slice(-1))
        }

        const newGame = this.currentGame.input(command)

        if (command === Command.Up) {
            return new Endless(this.addGame(newGame))
        }

        if (command === Command.Hold) {
            return new Endless(this.addGame(newGame))
        }

        return new Endless(this.updateRecentlyGame(newGame))
    }

    private addGame(game: Game): Game[] {
        return [game, ...this.games]
    }

    private updateRecentlyGame (game: Game): Game[] {
        return [game, ...this.games.slice(1, this.games.length)]
    }
}
