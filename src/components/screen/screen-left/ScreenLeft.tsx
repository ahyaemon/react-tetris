import React from 'react';
import './ScreenLeft.scss';
import Board from "./board/Board";

export default function ScreenLeft() {
    return (
        <div className="screenLeft">
            <div className="screenLeft__board">
                <Board/>
            </div>
        </div>
    )
}
