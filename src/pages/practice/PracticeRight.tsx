import css from "./PracticeRight.module.scss"
import React from "react";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";
import {usePracticeProps} from "./usePracticeProps";
import {Command} from "../../game/command";

export const PracticeRight: React.FC = () => {

    const { game: {
        currentGame,
        input,
    }} = usePracticeProps()

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
