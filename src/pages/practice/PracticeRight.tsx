import css from "./PracticeRight.module.scss"
import React from "react";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";
import {usePracticeProps} from "./usePracticeProps";

export const PracticeRight: React.FC = () => {

    const { game: {
        currentGame,
        input: {
            hold
        }
    }} = usePracticeProps()

    return (
        <>
            <div className={css.nextMinos}>
                <NextMinos minos={currentGame.nextMinos}/>
            </div>
            <div className={css.hold}>
                <Hold heldMino={currentGame.heldMino} hold={hold}/>
            </div>
        </>
    )
}
