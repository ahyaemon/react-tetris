import {Mino} from "../../../game/mino";
import j from "../../../assets/mino/j.png"
import l from "../../../assets/mino/l.png"
import s from "../../../assets/mino/s.png"
import z from "../../../assets/mino/z.png"
import t from "../../../assets/mino/t.png"
import i from "../../../assets/mino/i.png"
import o from "../../../assets/mino/o.png"
import css from "./MinoFrame.module.scss";

const imgSources = { j, l, s, z, t, i, o }

export function MinoFrame(props: { mino: Mino | null }) {
    const { mino } = props
    return (
        <div className={css.minoFrame}>
            { mino !== null &&
                <img src={imgSources[mino.getMinoAlphabet()]} alt={mino.getMinoAlphabet()} className={css.mino}/>
            }
        </div>
    )
}
