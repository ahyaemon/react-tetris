import css from "./EndlessPage.module.scss"
import {useGameHistory} from "../../hooks/useGameHistory";
import {useKeyDown} from "../../hooks/useKeyDown";
import {Command} from "../../game/command";
import {Game} from "../../game/game";
import {useRecoilValue} from "recoil";
import {Board} from "../../components/game/board/Board";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import RotationKeys from "../../components/game/rotation-keys/RotationKeys";
import React from "react";
import {useMediaQuery} from "react-responsive";
import {endlessStore} from "../../stores/GameStore";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import {EndlessRight} from "./EndlessRight";
import {EndlessLeft} from "./EndlessLeft";

const key = {
    w: 'w',
    a: 'a',
    s: 's',
    d: 'd',
    l: 'l',
    k: 'k',
    down: 'ArrowDown',
    up: 'ArrowUp',
    right: 'ArrowRight',
    left: 'ArrowLeft',
    z: 'z',
    x: 'x',
    shift: 'Shift',
    space: ' ',
}

function input(command: Command) {
    return (game: Game) => game.input(command)
}

export function EndlessPage() {
    const { updateRecentlyGame, addGame } = useGameHistory()
    // FIXME レンダリングされるたびにメソッドが再生成される問題をどうにかできないか
    useKeyDown([
        { key: key.s,  f: () => { updateRecentlyGame(input(Command.Down)) }},
        { key: key.w,  f: () => { addGame( input(Command.Up)) }},
        { key: key.d,  f: () => { updateRecentlyGame(input(Command.Right)) }},
        { key: key.a,  f: () => { updateRecentlyGame(input(Command.Left)) }},
        { key: key.k,  f: () => { updateRecentlyGame(input(Command.RotationLeft)) }},
        { key: key.l,  f: () => { updateRecentlyGame(input(Command.RotationRight)) }},

        { key: key.down,  f: () => { updateRecentlyGame(input(Command.Down)) }},
        { key: key.up,  f: () => { addGame(input(Command.Up)) }},
        { key: key.right,  f: () => { updateRecentlyGame(input(Command.Right)) }},
        { key: key.left,  f: () => { updateRecentlyGame(input(Command.Left)) }},
        { key: key.z,  f: () => { updateRecentlyGame(input(Command.RotationLeft)) }},
        { key: key.x,  f: () => { updateRecentlyGame(input(Command.RotationRight)) }},

        { key: key.shift,  f: () => { addGame(game => game.hold()) }},
    ])

    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

    const boardState = useRecoilValue(endlessStore.board)

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <EndlessLeft/>
                </div>
                <div className={css.board}>
                    <Board boardState={boardState}/>
                </div>
                <div>
                    <EndlessRight/>
                </div>
            </div>
            <div className={css.bottom}>
                <div>
                    <CrossKeys addGame={addGame} updateRecentlyGame={updateRecentlyGame}/>
                </div>
                <div className={css.rotationKeys}>
                    <RotationKeys/>
                </div>
            </div>
            {
                isDesktop && <KeyboardExplanation/>
            }
        </div>
    )
}
