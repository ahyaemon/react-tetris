import css from "../endless/EndlessPage.module.scss";
import {Board} from "../../components/game/board/Board";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import {RotationKeys} from "../../components/game/rotation-keys/RotationKeys";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import React from "react";
import {PracticeLeft} from "./PracticeLeft";
import {PracticeRight} from "./PracticeRight";
import {BoardState} from "../../game/game";
import {Color, Row} from "../../game/color";
import {useKeyCallbacks2} from "../../hooks/useKeyCallbacks";
import {useKeyDown} from "../../hooks/useKeyDown";
import {sampleTemplates} from "./sample";
import {useResponsive} from "../../hooks/useResponsive";
import {usePracticeProps} from "./usePracticeProps";

type BoardTemplate = BoardState

function createBoardStateWithTemplate(template: BoardTemplate, boardState: BoardState): BoardState {
    const rows = []
    for (let i = 0; i < 20; i++) {
        const colors = []
        for (let j = 0; j < 10; j++) {
            if (boardState.rows[i][j] === Color.None) {
                colors.push(template.rows[i][j])
            } else {
                colors.push(boardState.rows[i][j])
            }

        }
        rows.push(colors)
    }
    return { rows }
}

function createTemplateMap(): Map<Color, Color> {
    const map = new Map()
    map.set(Color.OrangeTemplate, Color.Orange)
    map.set(Color.PurpleTemplate, Color.Purple)
    map.set(Color.RedTemplate, Color.Red)
    map.set(Color.GreenTemplate, Color.Green)
    map.set(Color.YellowTemplate, Color.Yellow)
    map.set(Color.BlueTemplate, Color.Blue)
    map.set(Color.LightBlueTemplate, Color.LightBlue)
    map.set(Color.None, Color.None)
    return map
}

const templateMap = createTemplateMap()

function templateToRows(template: BoardTemplate): Row[] {
    return template.rows.map(
        row => row.map(
            cell => templateMap.get(cell)!
        )
    )
}

function matchTemplate(rows: Row[], template: BoardTemplate): boolean {
    const templateRows = templateToRows(template)
    for(let i = 0; i < 20; i++) {
        for(let j = 0; j < 10; j++) {
            if (rows[i][j] !== templateRows[i][j]) {
                return false
            }
        }
    }
    return true
}

export function PracticePage() {

    const { isDesktop } = useResponsive()

    const { game: { board, rows, input }} = usePracticeProps()

    const keyCallbacks = useKeyCallbacks2(input)

    useKeyDown(keyCallbacks)

    const templates: BoardTemplate[] = sampleTemplates

    if(matchTemplate(rows, templates[0])) {
        templates.shift()
    }

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <PracticeLeft/>
                </div>
                <div className={css.board}>
                    <Board boardState={createBoardStateWithTemplate(templates[0], board)}/>
                </div>
                <div>
                    <PracticeRight/>
                </div>
            </div>
            <div className={css.bottom}>
                <div>
                    <CrossKeys input={input}/>
                </div>
                <div className={css.rotationKeys}>
                    <RotationKeys input={input}/>
                </div>
            </div>
            {
                isDesktop && <KeyboardExplanation/>
            }
        </div>
    )
}
