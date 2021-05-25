import React from 'react';
import './Row.scss';
import CellC from "./cell/CellC";
import {Cell} from "../../../../../game/color";

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
