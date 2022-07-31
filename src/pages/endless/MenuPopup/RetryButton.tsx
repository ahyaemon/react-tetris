import React from "react";
import {useEndlessProps} from "../useEndlessProps";
import css from "../MenuPopup.module.css";
import {Command} from "../../../game/command";

export const RetryButton: React.FC<{close: () => void}> = ({close}) => {

    const {input, seed} = useEndlessProps()

    return (
        <div className={css.retryButtonContainer}>
            <p>今のシード値: {seed.value}</p>
            <button
                className={css.retryButton}
                onClick={() => {
                    input(Command.Retry)
                    close()
                }}
            >
                <h2>
                    再プレイ
                </h2>
                <p>出てくるミノの順番を変えずに初めからプレイ</p>
            </button>
        </div>
    )
}
