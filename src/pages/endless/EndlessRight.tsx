import css from "./EndlessRight.module.scss"
import React from "react";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";
import {useEndlessProps} from "./useEndlessProps";

export const EndlessRight: React.FC = () => {

    const { game: {
        currentGame,
        input: {
            hold
        }
    }} = useEndlessProps()

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
