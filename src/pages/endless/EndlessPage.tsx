import css from "./EndlessPage.module.scss"
import {useGameHistory} from "../../hooks/useGameHistory";
import {useKeyDown} from "../../hooks/useKeyDown";
import {useRecoilValue} from "recoil";
import {Board} from "../../components/game/board/Board";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import RotationKeys from "../../components/game/rotation-keys/RotationKeys";
import React from "react";
import {useMediaQuery} from "react-responsive";
import {endlessStore} from "../../stores/GameStore";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import {EndlessRight} from "./EndlessRight";
import {EndlessLeft} from "./EndlessLeft";
import {useKeyCallbacks} from "../../hooks/useKeyCallbacks";

export function EndlessPage() {

    const { updateRecentlyGame, addGame } = useGameHistory(endlessStore)

    const keyCallbacks = useKeyCallbacks(endlessStore)

    useKeyDown(keyCallbacks)

    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

    const boardState = useRecoilValue(endlessStore.board)

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <EndlessLeft/>
                </div>
                <div className={css.board}>
                    <Board boardState={boardState}/>
                </div>
                <div>
                    <EndlessRight/>
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
