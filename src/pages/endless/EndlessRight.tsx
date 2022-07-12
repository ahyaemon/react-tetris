import css from "./EndlessRight.module.scss"
import React from "react";
import {useRecoilValue} from "recoil";
import {endlessStore} from "../../stores/GameStore";
import {useGameHistory} from "../../hooks/useGameHistory";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";

export const EndlessRight: React.FC = () => {

    const nextMinos = useRecoilValue(endlessStore.nextMinos)

    const heldMino = useRecoilValue(endlessStore.heldMino)
    const {addGame} = useGameHistory()

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
