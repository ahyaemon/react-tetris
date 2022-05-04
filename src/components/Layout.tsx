/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from "@emotion/react";
import Board from "./board/Board";
import RotationKeys from "./rotation-keys/RotationKeys";
import CrossKeys from "./cross-keys/CrossKeys";
import HistoryBack from "./history-back/HistoryBack";
import NextMinos from "./mino/NextMinos";
import {Hold} from "./mino/Hold";
import {ReloadPopup} from "./reload/ReloadPopup";

export function Layout() {
    return (
        <div>
            <div css={css({
                display: 'flex'
            })}>
                <div
                    css={css({
                      paddingTop: "260px"
                    })}
                >
                    <div>
                        <ReloadPopup/>
                    </div>
                    <div
                        css={css({
                            marginTop: '10px',
                        })}
                    >
                        <HistoryBack/>
                    </div>
                </div>
                <div>
                    <Board/>
                </div>
                <div>
                    <div
                        css={css({
                            marginLeft: '4px'
                        })}
                    >
                        <NextMinos/>
                    </div>
                    <div
                        css={css({
                            marginTop: '10px',
                            marginLeft: '4px',
                        })}
                    >
                        <Hold/>
                    </div>
                </div>
            </div>
            <div
                css={css({
                    display: 'flex',
                    marginTop: '20px',
                    marginLeft: '50px',
                })}
            >
                <div>
                    <CrossKeys/>
                </div>
                <div
                    css={css({
                        marginLeft: '20px',
                    })}
                >
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
