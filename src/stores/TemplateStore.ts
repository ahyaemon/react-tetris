import {BoardState} from "../game/game";
import {atom, selector} from "recoil";
import {sampleTemplates} from "../pages/practice/sample";

type BoardTemplate = BoardState

export function createBoardTemplateStore() {
    const boardTemplates = atom<BoardTemplate[]>({
        key: 'boardTemplate',
        default: sampleTemplates
    })

    return {
        boardTemplates,
        currentBoard: selector({
            key: 'rows',
            get: ({get}) => {
                const templates = get(boardTemplates)
                return templates[0]
            }
        })
    }
}
