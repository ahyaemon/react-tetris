/** @jsxImportSource @emotion/react */

import React, {useContext} from 'react';
import GameContext from "../../gameContext";
import {css} from "@emotion/react";
import CellC from "./cell/CellC";

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
    const { gameState } = useContext(GameContext)

    return (
        <div css={style.board}>
            { gameState.rows.map((row, index) => (
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
