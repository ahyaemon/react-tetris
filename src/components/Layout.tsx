/** @jsxImportSource @emotion/react */

import React from 'react';
import {css} from "@emotion/react";
import Board from "./board/Board";
import RotationKeys from "./rotation-keys/RotationKeys";
import CrossKeys from "./cross-keys/CrossKeys";
import {useGameHistory} from "../hooks/useGameHistory";
import {useRecoilValue} from "recoil";
import {historySizeSelector} from "../gameState";

export function Layout() {
    // TODO 一手戻るをコンポーネント化する
    const { back } = useGameHistory()
    const historySize = useRecoilValue(historySizeSelector)

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
                    <button type="button" onClick={() => {back()}} disabled={historySize === 1}>一手戻る</button>
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
