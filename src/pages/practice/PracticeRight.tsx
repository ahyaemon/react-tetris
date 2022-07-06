import css from "./PracticeRight.module.scss"
import React from "react";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";
import {minoFactory} from "../../game/mino";
import {Game} from "../../game/game";

export const PracticeRight: React.FC = () => {

    const nextMinos = [
        minoFactory.i(),
        minoFactory.i(),
        minoFactory.i(),
        minoFactory.i(),
        minoFactory.i(),
    ]

    const heldMino = null

    const addGame = (f: (game: Game) => Game) => {}

    return (
        <>
            <div className={css.nextMinos}>
                <NextMinos minos={nextMinos}/>
            </div>
            <div className={css.hold}>
                <Hold heldMino={heldMino} addGame={addGame}/>
            </div>
        </>
    )
}
