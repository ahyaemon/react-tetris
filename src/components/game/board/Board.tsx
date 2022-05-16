/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from "@emotion/react";
import CellC from "./cell/CellC";
import {useRecoilValue} from "recoil";
import {boardSelector} from "../../../gameState";

const style = {
    board: css({
        border: '1px solid grey',
        display: 'inline-block',
    }),
    row: css({
        display: 'flex'
    })
}

export default function Board() {
    const board = useRecoilValue(boardSelector)

    return (
        <div css={style.board}>
            { board.rows.map((row, index) => (
                <div css={style.row} key={index}>
                    { row.map((cell, index) => (
                        <div className="row__cells" key={index}>
                            <CellC color={cell}/>
                        </div>
                    )) }
                </div>
            )) }
        </div>
    )
}
