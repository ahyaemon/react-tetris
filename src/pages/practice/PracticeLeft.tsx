import css from "./PracticeLeft.module.scss"
import React from "react";
import {ReloadPopup} from "./ReloadPopup";
import {HistoryBack} from "../../components/game/history-back/HistoryBack";
import {useRecoilValue} from "recoil";
import {practiceStore} from "../../stores/GameStore";
import {useGameHistory} from "../../hooks/useGameHistory";

export const PracticeLeft: React.FC = () => {

    const clearedLineCount = useRecoilValue(practiceStore.clearedLineCount)

    const renCount = useRecoilValue(practiceStore.renCount)

    const {back, historySize} = useGameHistory(practiceStore)

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
