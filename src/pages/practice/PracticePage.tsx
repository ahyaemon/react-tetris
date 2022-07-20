import css from "../endless/EndlessPage.module.scss";
import {BoardFC} from "../../components/game/board/BoardFC";
import { CrossKeys2} from "../../components/game/cross-keys/CrossKeys";
import {RotationKeys2} from "../../components/game/rotation-keys/RotationKeys";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import React from "react";
import {PracticeLeft} from "./PracticeLeft";
import {PracticeRight} from "./PracticeRight";
import {useKeyDown2} from "../../hooks/useKeyDown";
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

    useKeyDown2(input)

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
                    <CrossKeys2 input={input}/>
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
