/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {MinoFrame} from "./MinoFrame";
import {Mino} from "../../../game/mino";
import {Game} from "../../../game/game";
import React from "react";

type HoldProps = {
    heldMino: Mino | null
    addGame: (f: (game: Game) => Game) => void
}

export const Hold: React.FC<HoldProps> = ({ heldMino, addGame }) =>
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

