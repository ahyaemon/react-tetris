import React from 'react';
import './Row.scss';
import {Cell} from "../../../../../game/game";
import CellC from "./cell/CellC";

type RowProps = {
    cells: Cell[]
}

export default function Row({ cells }: RowProps) {
    return (
        <div className="row">
            { cells.map((cell, index) => (
                <div className="row__cells" key={index}>
                    <CellC color={cell}/>
                </div>
            )) }
        </div>
    )
}
