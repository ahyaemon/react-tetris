import css from "../endless/EndlessPage.module.scss";
import {Board} from "../../components/game/board/Board";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import RotationKeys from "../../components/game/rotation-keys/RotationKeys";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import React from "react";
import {PracticeLeft} from "./PracticeLeft";
import {PracticeRight} from "./PracticeRight";
import {useMediaQuery} from "react-responsive";
import {BoardState} from "../../game/game";
import {Color} from "../../game/color";
import {useRecoilValue} from "recoil";
import {practiceStore} from "../../stores/GameStore";
import {useGameHistory} from "../../hooks/useGameHistory";
import {useKeyCallbacks} from "../../hooks/useKeyCallbacks";
import {useKeyDown} from "../../hooks/useKeyDown";

function createRows(): Color[][] {
    const rows = []
    for (let i = 0; i < 20; i++) {
        const colors = []
        for (let j = 0; j < 10; j++) {
            colors.push(Color.None)
        }
        rows.push(colors)
    }
    return rows
}

function rows1(): Color[][] {
    const rows = createRows()

    rows[19][3] = Color.LightBlueTemplate
    rows[19][4] = Color.LightBlueTemplate
    rows[19][5] = Color.LightBlueTemplate
    rows[19][6] = Color.LightBlueTemplate

    rows[18][0] = Color.YellowTemplate
    rows[18][1] = Color.YellowTemplate
    rows[19][0] = Color.YellowTemplate
    rows[19][1] = Color.YellowTemplate

    rows[17][3] = Color.RedTemplate
    rows[18][2] = Color.RedTemplate
    rows[18][3] = Color.RedTemplate
    rows[19][2] = Color.RedTemplate

    rows[17][5] = Color.GreenTemplate
    rows[17][6] = Color.GreenTemplate
    rows[18][4] = Color.GreenTemplate
    rows[18][5] = Color.GreenTemplate

    rows[17][9] = Color.OrangeTemplate
    rows[18][9] = Color.OrangeTemplate
    rows[19][8] = Color.OrangeTemplate
    rows[19][9] = Color.OrangeTemplate

    return rows
}

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

export function PracticePage() {

    // ラインが消える時の Board を保持したリスト or その直前も含む？
    // -> 画面として残したいものを含ませる
    // -> 一致したら次に移行する
    const templates: BoardTemplate[] = [{ rows: rows1() }]

    const boardState = useRecoilValue(practiceStore.board)

    const { updateRecentlyGame, addGame } = useGameHistory(practiceStore)

    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

    const keyCallbacks = useKeyCallbacks(practiceStore)

    useKeyDown(keyCallbacks)

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <PracticeLeft/>
                </div>
                <div className={css.board}>
                    <Board boardState={createBoardStateWithTemplate(templates[0], boardState)}/>
                </div>
                <div>
                    <PracticeRight/>
                </div>
            </div>
            <div className={css.bottom}>
                <div>
                    <CrossKeys addGame={addGame} updateRecentlyGame={updateRecentlyGame}/>
                </div>
                <div className={css.rotationKeys}>
                    <RotationKeys/>
                </div>
            </div>
            {
                isDesktop && <KeyboardExplanation/>
            }
        </div>
    )
}
