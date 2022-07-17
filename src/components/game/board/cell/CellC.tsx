import React from 'react';
import './Cell.scss';
import {Cell} from "../../../../game/cell";

type CellProps = {
    color: Cell
}

export default function CellC({ color }: CellProps) {
    return (
        <div className={`cell cell--${color}`}>

        </div>
    )
}
