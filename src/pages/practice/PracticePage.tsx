import css from "../endless/EndlessPage.module.scss";
import {BoardFC} from "../../components/game/board/BoardFC";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import {RotationKeys2} from "../../components/game/rotation-keys/RotationKeys";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import React from "react";
import {PracticeLeft} from "./PracticeLeft";
import {PracticeRight} from "./PracticeRight";
import {useKeyDown} from "../../hooks/useKeyDown";
import {useResponsive} from "../../hooks/useResponsive";
import {usePracticeProps} from "./usePracticeProps";
import {usePracticeInitializer} from "./usePracticeInitializer";


export function PracticePage() {

    const { isDesktop } = useResponsive()

    const {
        initialize,
        game: {
            input
        },
        template: {
            boardWithTemplate,
        }
    } = usePracticeProps()

    usePracticeInitializer(initialize)

    useKeyDown(input)

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <PracticeLeft/>
                </div>
                <div className={css.board}>
                    <BoardFC board={boardWithTemplate}/>
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
                    <RotationKeys2 input={input}/>
                </div>
            </div>
            {
                isDesktop && <KeyboardExplanation/>
            }
        </div>
    )
}
