/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react";
import {MinoFrame} from "./MinoFrame";
import {Mino} from "../../../game/mino";
import React from "react";

type HoldProps = {
    heldMino: Mino | null,
    hold: () => void,
}

export const Hold: React.FC<HoldProps> = ({ heldMino, hold }) =>
    <div
        css={css({
            width: '60px',
        })}
        onClick={ () => hold() }
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

