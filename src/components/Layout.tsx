/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from "@emotion/react";
import Board from "./board/Board";
import RotationKeys from "./rotation-keys/RotationKeys";
import CrossKeys from "./cross-keys/CrossKeys";

const style = {
    controller: css({
        display: 'flex'
    }),
    crossKeys: css({
        width: 1200
    })
}

export function Layout() {
    return (
        <div>
            <div>
                <Board/>
            </div>
            <div css={style.controller}>
                <div>
                    <CrossKeys/>
                </div>
                <div>
                    <RotationKeys/>
                </div>
            </div>
        </div>
    )
}
