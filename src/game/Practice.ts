import {Board, Game} from "./game";

type BoardTemplate = {
    board: Board,
    index: number,
}

type GameWithTemplate = {
    game: Game,
    template: BoardTemplate,
}

export class Practice {

    constructor(
        private readonly gameWithTemplates: GameWithTemplate[],
    ) {}
}
