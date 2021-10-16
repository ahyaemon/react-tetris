/** @jsxImportSource @emotion/react */
import {Mino} from "../../game/mino";
import j from "../../assets/mino/j.png"
import l from "../../assets/mino/l.png"
import s from "../../assets/mino/s.png"
import z from "../../assets/mino/z.png"
import t from "../../assets/mino/t.png"
import i from "../../assets/mino/i.png"
import o from "../../assets/mino/o.png"
import {css} from "@emotion/react";

const imgSources = { j, l, s, z, t, i, o }

export function MinoFrame(props: { mino: Mino | null }) {
    const { mino } = props
    return (
        <div css={css({
            width: '50px',
            height: '50px',
            border: '1px solid grey',
            marginBottom: '2px'
        })}>
            { mino !== null &&
                <img src={imgSources[mino.getMinoAlphabet()]} alt={mino.getMinoAlphabet()} css={css({
                    width: '80%'
                })}/>
            }
        </div>
    )
}
