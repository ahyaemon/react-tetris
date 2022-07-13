import css from "./PracticeRight.module.scss"
import React from "react";
import {NextMinos} from "../../components/game/mino/NextMinos";
import {Hold} from "../../components/game/mino/Hold";
import {useRecoilValue} from "recoil";
import {useGameHistory} from "../../hooks/useGameHistory";
import {practiceStore} from "../../stores/GameStore";

export const PracticeRight: React.FC = () => {

    const nextMinos = useRecoilValue(practiceStore.nextMinos)

    const heldMino = useRecoilValue(practiceStore.heldMino)
    const {addGame} = useGameHistory(practiceStore)

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