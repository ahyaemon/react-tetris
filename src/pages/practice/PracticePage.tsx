import css from "../endless/EndlessPage.module.scss";
import {Board} from "../../components/game/board/Board";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import {RotationKeys} from "../../components/game/rotation-keys/RotationKeys";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import React from "react";
import {PracticeLeft} from "./PracticeLeft";
import {PracticeRight} from "./PracticeRight";
import {useKeyCallbacks} from "../../hooks/useKeyCallbacks";
import {useKeyDown} from "../../hooks/useKeyDown";
import {useResponsive} from "../../hooks/useResponsive";
import {usePracticeProps} from "./usePracticeProps";


export function PracticePage() {

    const { isDesktop } = useResponsive()

    const {
        game: {
            input
        },
        template: {
            boardWithTemplate,
        }
    } = usePracticeProps()

    const keyCallbacks = useKeyCallbacks(input)

    useKeyDown(keyCallbacks)

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <PracticeLeft/>
                </div>
                <div className={css.board}>
                    <Board boardState={boardWithTemplate}/>
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
