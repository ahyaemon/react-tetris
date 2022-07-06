import css from "../endless/EndlessPage.module.scss";
import {Board} from "../../components/game/board/Board";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import RotationKeys from "../../components/game/rotation-keys/RotationKeys";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import React from "react";
import {PracticeLeft} from "./PracticeLeft";
import {PracticeRight} from "./PracticeRight";
import {useMediaQuery} from "react-responsive";
import {Game} from "../../game/game";
import {Color} from "../../game/color";

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

export function PracticePage() {

    const boardState = { rows: createRows() }

    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

    const addGame = (f: (game: Game) => Game) => {}

    const updateRecentlyGame = (f: (game: Game) => Game) => {}

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <PracticeLeft/>
                </div>
                <div className={css.board}>
                    <Board boardState={boardState}/>
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
