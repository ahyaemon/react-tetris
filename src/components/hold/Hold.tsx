/** @jsxImportSource @emotion/react */

import {useRecoilValue} from "recoil";
import {nextMinosSelector} from "../../gameState";
import {css} from "@emotion/react";
import j from "../../assets/j.png"

export default function Hold() {
    const nextMinos = useRecoilValue(nextMinosSelector)

    return (
        <div>
            {
                nextMinos
                    .slice(0, 5)
                    .map(mino => {
                        return (
                            <div css={css({
                                width: '50px',
                                height: '50px',
                                border: '1px solid black'
                            })}>
                                {/* TODO minoType で出し分ける */}
                                <img src={j} css={css({
                                    width: '80%'
                                })}/>
                            </div>
                        )
                    })
            }
        </div>
    )
}
