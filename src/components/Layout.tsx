/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from "@emotion/react";
import Board from "./board/Board";
import RotationKeys from "./rotation-keys/RotationKeys";
import CrossKeys from "./cross-keys/CrossKeys";
import HistoryBack from "./history-back/HistoryBack";
import NextMinos from "./hold/NextMinos";

export function Layout() {
    return (
        <div>
            <div css={css({
                display: 'flex'
            })}>
                <div>
                    <Board/>
                </div>
                <div>
                    <div css={css({
                        marginLeft: '4px'
                    })}>
                        <NextMinos/>
                    </div>
                    <div>
                        <HistoryBack/>
                    </div>
                </div>
            </div>
            <div css={css({
                display: 'flex',
                marginTop: '20px'
            })}>
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
