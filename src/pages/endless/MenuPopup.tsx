import css from "./MenuPopup.module.css";
import Popup from "reactjs-popup";
import React, {useState} from "react";
import {useEndlessProps} from "./useEndlessProps";
import {Command} from "../../game/command";
import {BiCopy, FiExternalLink} from "react-icons/all";
import copy from "copy-to-clipboard";

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

    const [copiedCount, setCopiedCount] = useState<number>(0)

    return (
        <div>
            <button
                type="button"
                className={css.templateButton}
                onClick={ () => {
                    const param = createPracticeQueryParam()
                    const url = location.origin + `/practice?v=1&p=${param}`
                    setUrl(url)
                } }
            >テンプレ練習 URL 作成</button>
            {copiedCount >= 1 &&
                <span className={css.copiedMessage}>コピーしたよ{"！".repeat(copiedCount)}</span>
            }
            {url &&
                <div className={css.templateAreaContainer}>
                    <textarea readOnly value={url} className={css.templateTextArea}/>
                    <div className={css.templateIconContainer}>
                        <div>
                            <BiCopy size={30} onClick={() => {
                                copy(url)
                                setCopiedCount(c => c + 1)
                            }}/>
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
