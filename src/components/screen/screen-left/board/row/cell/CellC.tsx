import React from 'react';
import './Cell.scss';
import {Color} from "../../../../../../game/mino";

type CellProps = {
    color: Color
}

export default function CellC({ color }: CellProps) {
    return (
        <div className={`cell cell--${color}`}>

        </div>
    )
}
