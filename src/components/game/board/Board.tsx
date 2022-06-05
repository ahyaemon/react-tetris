/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from "@emotion/react";
import CellC from "./cell/CellC";
import {BoardState} from "../../../game/game";

const style = {
    board: css({
        border: '1px solid grey',
        display: 'inline-block',
    }),
    row: css({
        display: 'flex'
    })
}

type BoardProps = {
    boardState: BoardState,
}

export const Board: React.FC<BoardProps> = (props) => {
    return (
        <div css={style.board}>
            { props.boardState.rows.map((row, index) => (
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
