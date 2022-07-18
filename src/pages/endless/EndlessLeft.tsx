import css from "./EndlessLeft.module.scss"
import React from "react";
import {ReloadPopup} from "./ReloadPopup";
import {HistoryBack} from "../../components/game/history-back/HistoryBack";
import {useEndlessProps} from "./useEndlessProps";

export const EndlessLeft: React.FC = () => {

    const { game: {
        currentGame,
        historySize,
        back,
    }} = useEndlessProps()

    return (
        <>
            <div>
                REN: {currentGame.renCount()}
            </div>
            <div>
                LINE: {currentGame.clearedRowCount}
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
