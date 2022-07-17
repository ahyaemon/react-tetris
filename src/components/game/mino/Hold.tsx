import {MinoFrame} from "./MinoFrame";
import {Mino} from "../../../game/mino";
import React from "react";
import styles from"./Hold.module.scss";

type HoldProps = {
    heldMino: Mino | null,
    hold: () => void,
}

export const Hold: React.FC<HoldProps> = ({ heldMino, hold }) =>
    <div className={styles.container} onClick={ () => hold() }>
        <p className={styles.font}>
            Hold
        </p>
        <MinoFrame mino={heldMino}/>
    </div>

