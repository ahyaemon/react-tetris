import css from "./EndlessLeft.module.scss"
import React from "react";
import {useRecoilValue} from "recoil";
import {endlessStore} from "../../stores/EndlessStore";
import {useGameHistory} from "../../hooks/useGameHistory";
import {ReloadPopup} from "./ReloadPopup";
import {HistoryBack} from "../../components/game/history-back/HistoryBack";

export const EndlessLeft: React.FC = () => {

    const clearedLineCount = useRecoilValue(endlessStore.clearedLineCount)

    const renCount = useRecoilValue(endlessStore.renCount)

    const {back, historySize} = useGameHistory()

    return (
        <>
            <div>
                REN: {renCount}
            </div>
            <div>
                LINE: {clearedLineCount}
            </div>
            <div>
                <ReloadPopup/>
            </div>
            <div className={css.historyBack}>
                <HistoryBack back={back} historySize={historySize}/>
            </div>
        </>
    )
}
