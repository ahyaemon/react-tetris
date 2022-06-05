/** @jsxImportSource @emotion/react */

import {useRecoilValue} from "recoil";
import {MinoFrame} from "./MinoFrame";
import {endlessStore} from "../../../stores/EndlessStore";

export default function NextMinos() {
    const nextMinos = useRecoilValue(endlessStore.nextMinos)
    return (
        <div>
            { nextMinos
                .slice(0, 5)
                .map((mino, i) => <MinoFrame key={i} mino={mino}/>)
            }
        </div>
    )
}
