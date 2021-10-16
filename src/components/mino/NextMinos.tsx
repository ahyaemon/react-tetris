/** @jsxImportSource @emotion/react */

import {useRecoilValue} from "recoil";
import {nextMinosSelector} from "../../gameState";
import {MinoFrame} from "./MinoFrame";

export default function NextMinos() {
    const nextMinos = useRecoilValue(nextMinosSelector)
    return (
        <div>
            { nextMinos
                .slice(0, 5)
                .map((mino, i) => <MinoFrame key={i} mino={mino}/>)
            }
        </div>
    )
}
