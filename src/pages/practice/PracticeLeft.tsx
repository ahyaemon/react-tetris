import css from "./PracticeLeft.module.scss"
import React from "react";
import {ReloadPopup} from "../endless/ReloadPopup";
import {HistoryBack} from "../../components/game/history-back/HistoryBack";

export const PracticeLeft: React.FC = () => {

    const renCount = 0

    const clearedLineCount = 0

    const back = () => {}

    const historySize = 1

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
