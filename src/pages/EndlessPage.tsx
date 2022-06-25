/** @jsxImportSource @emotion/react */

import {useGameHistory} from "../hooks/useGameHistory";
import {useKeyDown} from "../hooks/useKeyDown";
import {Command} from "../game/command";
import {Game} from "../game/game";
import {useRecoilValue} from "recoil";
import {css} from "@emotion/react";
import {ReloadPopup} from "../components/game/reload/ReloadPopup";
import {HistoryBack} from "../components/game/history-back/HistoryBack";
import {Board} from "../components/game/board/Board";
import {NextMinos} from "../components/game/mino/NextMinos";
import {Hold} from "../components/game/mino/Hold";
import CrossKeys from "../components/game/cross-keys/CrossKeys";
import RotationKeys from "../components/game/rotation-keys/RotationKeys";
import React from "react";
import {useMediaQuery} from "react-responsive";
import {endlessStore} from "../stores/EndlessStore";

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
            <div css={css({
                display: 'flex',
                marginLeft: '4px',
            })}>
                <div
                    css={css({
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    })}
                >
                    <Left/>
                </div>
                <div
                    css={css({
                        marginLeft: '4px',
                    })}
                >
                    <Board boardState={boardState}/>
                </div>
                <div>
                    <Right/>
                </div>
            </div>
            <div
                css={css({
                    display: 'flex',
                    marginTop: '20px',
                    marginLeft: '50px',
                })}
            >
                <div>
                    <CrossKeys/>
                </div>
                <div
                    css={css({
                        marginLeft: '20px',
                    })}
                >
                    <RotationKeys/>
                </div>
            </div>
            {
                isDesktop && <KeyboardExplanation/>
            }
        </div>
    )
}

const Left: React.FC = () => {

    const clearedLineCount = useRecoilValue(endlessStore.clearedLineCount)

    const renCount = useRecoilValue(endlessStore.renCount)

    const { back, historySize } = useGameHistory()

    return (
        <>
            <div>
                REN: {renCount}
            </div>
            <div>
                LINE: {clearedLineCount}
            </div>
            <div>
                <ReloadPopup/>
            </div>
            <div
                css={css({
                    marginTop: '10px',
                })}
            >
                <HistoryBack back={back} historySize={historySize}/>
            </div>
        </>
    )
}

const Right: React.FC = () => {

    const nextMinos = useRecoilValue(endlessStore.nextMinos)

    const heldMino = useRecoilValue(endlessStore.heldMino)
    const { addGame } = useGameHistory()

    return (
        <>
            <div
                css={css({
                    marginLeft: '4px'
                })}
            >
                <NextMinos minos={nextMinos}/>
            </div>
            <div
                css={css({
                    marginTop: '20px',
                    marginLeft: '4px',
                })}
            >
                <Hold heldMino={heldMino} addGame={addGame}/>
            </div>
        </>
    )
}

const KeyboardExplanation: React.FC = () => (
    <div>
        <p>キーボード操作</p>
        <p>移動 : [←][↓][→] or [a][s][d]</p>
        <p>回転 : [z][x] or [k][l]</p>
        <p>ハードドロップ : [↑] or [w]</p>
        <p>ホールド : [Shift]</p>
    </div>
)
