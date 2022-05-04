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
            <button>Hold</button>
            <div
                css={css({
                    marginTop: '4px',
                })}
            >
                <MinoFrame mino={heldMino}/>
            </div>
        </div>
    )
}
