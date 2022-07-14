import css from "./ReloadPopup.module.scss"
import Popup from "reactjs-popup";
import {MdRefresh} from "react-icons/md";
import React from "react";
import {useGameHistory} from "../../hooks/useGameHistory";
import {practiceStore} from "../../stores/GameStore";

export const ReloadPopup: React.FC = () => {
    return (
        <Popup trigger={
            <button className={css.triggerButton} type="button">
                <MdRefresh size={'2em'}/>
            </button>
        } position="right center" modal>
            {/* @ts-ignore */}
            {(close: any) => (
                <div className={css.newButton}>
                    <RetryButton close={close}/>
                </div>
            )}
        </Popup>
    )
}

type ButtonProps = {
    close: () => void
}

const RetryButton:React.FC<ButtonProps> = ({ close }) => {

    const { retry } = useGameHistory(practiceStore)

    return (
        <button
            className={css.retryButton}
            onClick={() => {
                retry()
                close()
            }}
        >
            <h1>
                再プレイ
            </h1>
        </button>
    )
}
