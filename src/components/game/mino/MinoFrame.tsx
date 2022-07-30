import {Mino, MinoType} from "../../../game/mino";
import css from "./MinoFrame.module.scss";
import React from "react";

export function MinoFrame(props: { mino: Mino | null }) {
    const { mino } = props
    return (
        <div className={css.minoFrame}>
            { mino !== null &&
                getMinoComponent(mino.minoType)
            }
        </div>
    )
}

const getMinoComponent = (minoType: MinoType) => {
    switch (minoType) {
        case MinoType.I: return <I/>
        case MinoType.J: return <J/>
        case MinoType.L: return <L/>
        case MinoType.S: return <S/>
        case MinoType.Z: return <Z/>
        case MinoType.O: return <O/>
        case MinoType.T: return <T/>
    }
}

const T: React.FC = () => {
    return (
        <div className={css.twoThreeGrid}>
            <div></div>
            <div className={css.tCell}></div>
            <div></div>
            <div className={css.tCell}></div>
            <div className={css.tCell}></div>
            <div className={css.tCell}></div>
        </div>
    )
}

const J: React.FC = () => {
    return (
        <div className={css.twoThreeGrid}>
            <div className={css.jCell}></div>
            <div></div>
            <div></div>
            <div className={css.jCell}></div>
            <div className={css.jCell}></div>
            <div className={css.jCell}></div>
        </div>
    )
}

const L: React.FC = () => {
    return (
        <div className={css.twoThreeGrid}>
            <div></div>
            <div></div>
            <div className={css.lCell}></div>
            <div className={css.lCell}></div>
            <div className={css.lCell}></div>
            <div className={css.lCell}></div>
        </div>
    )
}

const S: React.FC = () => {
    return (
        <div className={css.twoThreeGrid}>
            <div></div>
            <div className={css.sCell}></div>
            <div className={css.sCell}></div>
            <div className={css.sCell}></div>
            <div className={css.sCell}></div>
            <div></div>
        </div>
    )
}

const Z: React.FC = () => {
    return (
        <div className={css.twoThreeGrid}>
            <div className={css.zCell}></div>
            <div className={css.zCell}></div>
            <div></div>
            <div></div>
            <div className={css.zCell}></div>
            <div className={css.zCell}></div>
        </div>
    )
}

const O: React.FC = () => {
    return (
        <div className={css.twoTwoGrid}>
            <div className={css.oCell}></div>
            <div className={css.oCell}></div>
            <div className={css.oCell}></div>
            <div className={css.oCell}></div>
        </div>
    )
}

const I: React.FC = () => {
    return (
        <div className={css.oneFourGrid}>
            <div className={css.iCell}></div>
            <div className={css.iCell}></div>
            <div className={css.iCell}></div>
            <div className={css.iCell}></div>
        </div>
    )
}

