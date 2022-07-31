import css from "./MenuPopup.module.css";
import Popup from "reactjs-popup";
import React from "react";
import {NewButton} from "./MenuPopup/NewButton";
import {TemplateButton} from "./MenuPopup/TemplateButton";
import {RetryButton} from "./MenuPopup/RetryButton";

export const MenuPopup: React.FC = () => {
    return (
        <Popup trigger={
            <button className={css.triggerButton} type="button">
                メニュー
            </button>
        } position="right center" modal>
            {/* @ts-ignore */}
            {(close: any) => (
                <div className={css.buttons}>
                    <NewButton close={close}/>

                    <hr className={css.bar}/>

                    <RetryButton close={close}/>

                    <hr className={css.bar}/>

                    <TemplateButton/>
                </div>
            )}
        </Popup>
    )
}

