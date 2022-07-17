import {MinoFrame} from "./MinoFrame";
import {Mino} from "../../../game/mino";
import React from "react";

type NextMinosProps = {
    minos: Mino[]
}

export const NextMinos: React.FC<NextMinosProps> = ({ minos }) =>
    <div>
        { minos
            .slice(0, 5)
            .map((mino, i) => <MinoFrame key={i} mino={mino}/>)
        }
    </div>
