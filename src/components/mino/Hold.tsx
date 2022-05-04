/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {useRecoilValue} from "recoil";
import {heldMinoSelector} from "../../gameState";
import {MinoFrame} from "./MinoFrame";
import {useGameHistory} from "../../hooks/useGameHistory";

export function Hold() {
    const heldMino = useRecoilValue(heldMinoSelector)
    const { addGame } = useGameHistory()

    return (
        <div
            css={css({
                width: '60px',
            })}
            onClick={ () => addGame(game => game.hold()) }
        >
            <p
              css={css({
                margin: 0,
                padding: 0,
              })}
            >
              Hold
            </p>
            <MinoFrame mino={heldMino}/>
        </div>
    )
}
