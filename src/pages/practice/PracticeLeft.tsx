import css from "./PracticeLeft.module.scss"
import React from "react";
import {ReloadPopup} from "./ReloadPopup";
import {HistoryBack} from "../../components/game/history-back/HistoryBack";
import {usePracticeProps} from "./usePracticeProps";
import {Command} from "../../game/command";

export const PracticeLeft: React.FC = () => {

    const {
        game: {
            currentGame,
            input,
            // back,
            historySize,
        },
        template: {
            isCleared,
        }
    } = usePracticeProps()

    return (
        <>
            {isCleared &&
                <div className={css.clear}>
                    <div>合</div>
                    <div>格</div>
                </div>
            }
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
                <HistoryBack back={() => { input(Command.Back) }} historySize={historySize}/>
            </div>
        </>
    )
}
