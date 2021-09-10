import React from 'react';
import './CrossKeys.scss';
import {Command} from "../../game/command";
import {useCommandPressed} from "../../hooks/useCommandPressed";
import { useLongPressMobile } from "../../hooks/useLongPress";
import { useMediaQuery } from 'react-responsive'
import {useSetRecoilState} from "recoil";
import {game} from "../../gameState";

function CrossKeysDesktop() {
    // eslint-disable-next-line
    const setGame = useSetRecoilState(game)
    const setDownPressed = useCommandPressed(Command.Down)
    const setLeftPressed = useCommandPressed(Command.Left)
    const setRightPressed = useCommandPressed(Command.Right)

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={() => { setGame((game) => game.input(Command.Up)) }}
            >
            </div>
            <div
                className="crossKeys__left crossKey"
                onMouseDown={ () => setLeftPressed(true) }
                onMouseUp={ () => setLeftPressed(false ) }
            >
            </div>
            <div
                className="crossKeys__right crossKey"
                onMouseDown={ () => setRightPressed(true) }
                onMouseUp={ () => setRightPressed(false ) }
            >
            </div>
            <div
                className="crossKeys__down crossKey"
                onMouseDown={ () => setDownPressed(true) }
                onMouseUp={ () => setDownPressed(false ) }
            >
            </div>
        </div>
    )
}

function CrossKeysMobile() {
    // eslint-disable-next-line
    const setGame = useSetRecoilState(game)
    const downRef = useLongPressMobile(Command.Down)
    const leftRef = useLongPressMobile(Command.Left)
    const rightRef = useLongPressMobile(Command.Right)

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={() => { setGame((game) => game.input(Command.Up)) }}
            >
            </div>
            <div
                className="crossKeys__left crossKey"
                ref={leftRef}
            >
            </div>
            <div
                className="crossKeys__right crossKey"
                ref={rightRef}
            >
            </div>
            <div
                className="crossKeys__down crossKey"
                ref={downRef}
            >
            </div>
        </div>
    )
}

export default function CrossKeys() {
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            { isDesktop && <CrossKeysDesktop/> }
            { isMobile && <CrossKeysMobile/>}
        </>
    )
}
