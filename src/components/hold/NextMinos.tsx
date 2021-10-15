/** @jsxImportSource @emotion/react */

import {useRecoilValue} from "recoil";
import {nextMinosSelector} from "../../gameState";
import {css} from "@emotion/react";
import j from "../../assets/mino/j.png"
import l from "../../assets/mino/l.png"
import s from "../../assets/mino/s.png"
import z from "../../assets/mino/z.png"
import t from "../../assets/mino/t.png"
import i from "../../assets/mino/i.png"
import o from "../../assets/mino/o.png"

export default function NextMinos() {
    const nextMinos = useRecoilValue(nextMinosSelector)

    const imgSources = { j, l, s, z, t, i, o }

    return (
        <div>
            {
                nextMinos
                    .slice(0, 5)
                    .map(mino => {
                        const imgSource = imgSources[mino.getMinoAlphabet()]
                        return (
                            <div css={css({
                                width: '50px',
                                height: '50px',
                                border: '1px solid black'
                            })}>
                                <img src={imgSource} alt={mino.getMinoAlphabet()} css={css({
                                    width: '80%'
                                })}/>
                            </div>
                        )
                    })
            }
        </div>
    )
}
