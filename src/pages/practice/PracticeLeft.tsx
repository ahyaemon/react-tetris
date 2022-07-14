import css from "./PracticeLeft.module.scss"
import React from "react";
import {ReloadPopup} from "./ReloadPopup";
import {HistoryBack} from "../../components/game/history-back/HistoryBack";
import {useRecoilValue} from "recoil";
import {practiceStore} from "../../stores/GameStore";
import {useGameUpdater} from "../../hooks/useGameUpdater";

export const PracticeLeft: React.FC = () => {

    const clearedLineCount = useRecoilValue(practiceStore.clearedLineCount)

    const renCount = useRecoilValue(practiceStore.renCount)

    const { back } = useGameUpdater(practiceStore)

    const historySize = useRecoilValue(practiceStore.historySize)

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
