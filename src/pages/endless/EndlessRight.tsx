import css from "./EndlessRight.module.scss"
import React from "react";
import {useRecoilValue} from "recoil";
import {endlessStore} from "../../stores/GameStore";
import {useGameUpdater} from "../../hooks/useGameUpdater";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";

export const EndlessRight: React.FC = () => {

    const nextMinos = useRecoilValue(endlessStore.nextMinos)

    const heldMino = useRecoilValue(endlessStore.heldMino)
    const {addGame} = useGameUpdater(endlessStore)

    const hold = () => {
        addGame(game => game.hold())
    }

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
