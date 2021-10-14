/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from "@emotion/react";
import Board from "./board/Board";
import RotationKeys from "./rotation-keys/RotationKeys";
import CrossKeys from "./cross-keys/CrossKeys";

export function Layout() {
    return (
        <div>
            <div css={css({
                display: 'flex'
            })}>
                <div>
                    <Board/>
                </div>
                <div css={css({
                    display: 'flex',
                    justifyContent: 'end',
                    flexDirection: 'column',
                    paddingBottom: '20px'
                })}>
                    <button type="button">一手戻る</button>
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
