/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from "@emotion/react";
import Board from "./board/Board";
import RotationKeys from "./rotation-keys/RotationKeys";
import CrossKeys from "./cross-keys/CrossKeys";
import HistoryBack from "./history-back/HistoryBack";
import NextMinos from "./mino/NextMinos";
import {Hold} from "./mino/Hold";
import { MdRefresh } from 'react-icons/md';

export function Layout() {
    return (
        <div>
            <div css={css({
                display: 'flex'
            })}>
                <div css={css({
                    paddingTop: "260px"
                })}>
                    <Hold/>
                </div>
                <div>
                    <Board/>
                </div>
                <div>
                    <div css={css({
                        marginLeft: '4px'
                    })}>
                        <NextMinos/>
                    </div>
                    <div css={css({
                        border: '1px solid grey',
                        borderRadius: '4px',
                        textAlign: 'center',
                        marginTop: '10px',
                        marginLeft: '4px',
                        paddingTop: '6px',
                    })}>
                        <MdRefresh size={'2em'}/>
                    </div>
                    <div css={css({
                        marginTop: '10px',
                        marginLeft: '4px',
                    })}>
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
            <div>
                <p>キーボード操作</p>
                <p>移動 : [←][↓][→] or [a][s][d]</p>
                <p>ハードドロップ : [↑] or [w]</p>
                <p>ホールド : [Shift]</p>
            </div>
        </div>
    )
}
