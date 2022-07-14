import css from "./ReloadPopup.module.scss"
import Popup from "reactjs-popup";
import {MdRefresh} from "react-icons/md";
import React from "react";
import {useGameUpdater} from "../../hooks/useGameUpdater";
import {endlessStore} from "../../stores/GameStore";

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
                    <NewButton close={close}/>
                    <RetryButton close={close}/>
                </div>
            )}
        </Popup>
    )
}

type ButtonProps = {
    close: () => void
}

const NewButton: React.FC<ButtonProps> = ({ close }) => {

    const { newGame } = useGameUpdater(endlessStore)

    return (
        <button
            onClick={() => {
                newGame()
                close()
            }}
        >
            <h1>新規プレイ</h1>
        </button>
    )
}

const RetryButton:React.FC<ButtonProps> = ({ close }) => {

    const { retry } = useGameUpdater(endlessStore)

    return (
        <button
            className={css.retryButton}
            onClick={() => {
                retry()
                close()
            }}
        >
            <h2>
                再プレイ
            </h2>
            <p>出てくるミノの順番を変えずに初めからプレイ</p>
        </button>
    )
}
