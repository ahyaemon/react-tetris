import css from "./EndlessPage.module.scss"
import {useKeyDown} from "../../hooks/useKeyDown";
import {BoardFC} from "../../components/game/board/BoardFC";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import {RotationKeys} from "../../components/game/rotation-keys/RotationKeys";
import React from "react";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import {EndlessRight} from "./EndlessRight";
import {EndlessLeft} from "./EndlessLeft";
import {useKeyCallbacks} from "../../hooks/useKeyCallbacks";
import {useResponsive} from "../../hooks/useResponsive";
import {useEndlessProps} from "./useEndlessProps";

export function EndlessPage() {

    const { game: {
        input,
        board,
    }} = useEndlessProps()

    const keyCallbacks = useKeyCallbacks(input)

    useKeyDown(keyCallbacks)

    const { isDesktop } = useResponsive()

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <EndlessLeft/>
                </div>
                <div className={css.board}>
                    <BoardFC board={board}/>
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
                    <RotationKeys input={input}/>
                </div>
            </div>
            {
                isDesktop && <KeyboardExplanation/>
            }
        </div>
    )
}
