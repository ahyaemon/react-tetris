import css from "./MenuPopup.module.css";
import Popup from "reactjs-popup";
import React, {useState} from "react";
import {useEndlessProps} from "./useEndlessProps";
import {Command} from "../../game/command";
import {BiCopy, FiExternalLink} from "react-icons/all";

export const MenuPopup: React.FC = () => {
    return (
        <Popup trigger={
            <button className={css.triggerButton} type="button">
                メニュー
            </button>
        } position="right center" modal>
            {/* @ts-ignore */}
            {(close: any) => (
                <div className={css.newButton}>
                    <NewButton close={close}/>
                    <RetryButton close={close}/>

                    <hr className={css.bar}/>

                    <TemplateButton/>
                </div>
            )}
        </Popup>
    )
}

const TemplateButton: React.FC = () => {

    const { createPracticeQueryParam } = useEndlessProps()

    const [url, setUrl] = useState<string | undefined>(undefined)

    return (
        <div>
            <button
                type="button"
                className={css.templateButton}
                onClick={ () => {
                    const param = createPracticeQueryParam()
                    // FIXME パスは hooks で作る？ router が不要なら hooks じゃなくても良さそうだけど
                    const url = location.origin + `/react-tetris/#/practice?v=1&p=${param}`
                    setUrl(url)
                } }
            >テンプレ練習 URL 作成</button>
            {url &&
                <div className={css.templateAreaContainer}>
                    <textarea readOnly value={url} className={css.templateTextArea}/>
                    <div className={css.templateIconContainer}>
                        <div>
                            <BiCopy size={30}/>
                        </div>
                        <div>
                            <FiExternalLink size={30} onClick={() => {
                                window.open(url, '_blank');
                            }}/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

type ButtonProps = {
    close: () => void
}

const NewButton: React.FC<ButtonProps> = ({ close }) => {

    const { input } = useEndlessProps()

    return (
        <button
            onClick={() => {
                input(Command.NewGame)
                close()
            }}
        >
            <h1>新規プレイ</h1>
        </button>
    )
}

const RetryButton:React.FC<ButtonProps> = ({ close }) => {

    const { input } = useEndlessProps()

    return (
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
    )
}
