import css from "./PracticeLeft.module.scss"
import React from "react";
import {ReloadPopup} from "./ReloadPopup";
import {HistoryBack} from "../../components/game/history-back/HistoryBack";
import {usePracticeProps} from "./usePracticeProps";

export const PracticeLeft: React.FC = () => {

    const {
        game: {
            clearedLineCount,
            renCount,
            back,
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
