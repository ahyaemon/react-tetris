import css from "./EndlessLeft.module.scss"
import React from "react";
import {MenuPopup} from "./MenuPopup";
import {HistoryBack} from "../../components/game/history-back/HistoryBack";
import {useEndlessProps} from "./useEndlessProps";
import {Command} from "../../game/command";

export const EndlessLeft: React.FC = () => {

    const { currentGame, historySize, input } = useEndlessProps()

    return (
        <>
            <div>
                REN: {currentGame.renCount()}
            </div>
            <div>
                LINE: {currentGame.clearedRowCount}
            </div>
            <div>
                <MenuPopup/>
            </div>
            <div className={css.historyBack}>
                <HistoryBack back={() => { input(Command.Back) }} historySize={historySize}/>
            </div>
        </>
    )
}
