import css from "./PracticeRight.module.scss"
import React from "react";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";
import {usePracticeProps} from "./usePracticeProps";

export const PracticeRight: React.FC = () => {

    const { game: {
        nextMinos,
        heldMino,
        input: {
            hold
        }
    }} = usePracticeProps()

    return (
        <>
            <div className={css.nextMinos}>
                <NextMinos minos={nextMinos}/>
            </div>
            <div className={css.hold}>
                <Hold heldMino={heldMino} hold={hold}/>
            </div>
        </>
    )
}
