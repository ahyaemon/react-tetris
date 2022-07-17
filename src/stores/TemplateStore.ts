import {atom, selector} from "recoil";
import {sampleTemplates} from "../pages/practice/sample";
import {BoardTemplate} from "../game/BoardTemplate";

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
        }),
        length: selector({
            key: 'length',
            get: ({get}) => {
                return get(boardTemplates).length
            }
        })
    }
}
