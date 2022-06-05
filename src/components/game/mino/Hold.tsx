/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {useRecoilValue} from "recoil";
import {MinoFrame} from "./MinoFrame";
import {useGameHistory} from "../../../hooks/useGameHistory";
import {endlessStore} from "../../../stores/EndlessStore";

export function Hold() {
    const heldMino = useRecoilValue(endlessStore.heldMino)
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
