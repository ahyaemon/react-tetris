import React from 'react';
import './Screen.scss';
import ScreenLeft from "./screen-left/ScreenLeft";
import ScreenRight from "./screen-right/ScreenRight";

export default function Screen() {
    return (
        <div className="screen">
            <div className="screen__left">
                <ScreenLeft/>
            </div>
            <div className="screen__right">
                <ScreenRight/>
            </div>
        </div>
    )
}
