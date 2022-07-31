import React, {useState} from "react";
import {useEndlessProps} from "../useEndlessProps";
import css from "../MenuPopup.module.css";
import {BiCopy, FiExternalLink} from "react-icons/all";
import copy from "copy-to-clipboard";

export const TemplateButton: React.FC = () => {

    const {createPracticeQueryParam} = useEndlessProps()

    const [url, setUrl] = useState<string | undefined>(undefined)

    const [copiedCount, setCopiedCount] = useState<number>(0)

    return (
        <div>
            <button
                type="button"
                className={css.templateButton}
                onClick={() => {
                    const param = createPracticeQueryParam()
                    const url = location.origin + `/practice?v=1&p=${param}`
                    setUrl(url)
                }}
            >テンプレ練習 URL 作成
            </button>
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
