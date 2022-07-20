import css from "./EndlessRight.module.scss"
import React from "react";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";
import {useEndlessProps} from "./useEndlessProps";
import {Command} from "../../game/command";

export const EndlessRight: React.FC = () => {

    const { currentGame, input } = useEndlessProps()

    return (
        <>
            <div className={css.nextMinos}>
                <NextMinos minos={currentGame.nextMinos}/>
            </div>
            <div className={css.hold}>
                <Hold heldMino={currentGame.heldMino} hold={() => { input(Command.Hold) }}/>
            </div>
        </>
    )
}
