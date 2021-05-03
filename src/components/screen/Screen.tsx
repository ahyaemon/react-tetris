import React from 'react';
import './Screen.scss';
import Left from "./left/Left";
import Right from "./right/Right";

export default function Screen() {
    return (
        <div className="screen">
            <div className="screen__left">
                <Left/>
            </div>
            <div className="screen__right">
                <Right/>
            </div>
        </div>
    )
}
