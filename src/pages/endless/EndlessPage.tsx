import css from "./EndlessPage.module.scss"
import {useKeyDown} from "../../hooks/useKeyDown";
import {BoardFC} from "../../components/game/board/BoardFC";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import {RotationKeys2} from "../../components/game/rotation-keys/RotationKeys";
import React from "react";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import {EndlessRight} from "./EndlessRight";
import {EndlessLeft} from "./EndlessLeft";
import {useResponsive} from "../../hooks/useResponsive";
import {useEndlessProps} from "./useEndlessProps";

export function EndlessPage() {

    const { currentGame, input } = useEndlessProps()

    const { isDesktop } = useResponsive()

    useKeyDown(input)

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <EndlessLeft/>
                </div>
                <div className={css.board}>
                    <BoardFC board={currentGame.board}/>
                </div>
                <div>
                    <EndlessRight/>
                </div>
            </div>
            <div className={css.bottom}>
                <div>
                    <CrossKeys input={input}/>
                </div>
                <div className={css.rotationKeys}>
                    <RotationKeys2 input={input}/>
                </div>
            </div>
            {
                isDesktop && <KeyboardExplanation/>
            }
        </div>
    )
}
