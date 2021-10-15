import React from 'react';
import './CrossKeys.scss';
import {Command} from "../../game/command";
import {useCommandPressed} from "../../hooks/useCommandPressed";
import { useLongPressMobile } from "../../hooks/useLongPress";
import { useMediaQuery } from 'react-responsive'
import {useGameHistory} from "../../hooks/useGameHistory";

function CrossKeysDesktop() {
    // eslint-disable-next-line
    const { addGame } = useGameHistory()
    const setDownPressed = useCommandPressed(Command.Down)
    const setLeftPressed = useCommandPressed(Command.Left)
    const setRightPressed = useCommandPressed(Command.Right)

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={() => { addGame(game => game.input(Command.Up)) }}
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
    const { addGame } = useGameHistory()
    const downRef = useLongPressMobile(Command.Down)
    const leftRef = useLongPressMobile(Command.Left)
    const rightRef = useLongPressMobile(Command.Right)

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={() => { addGame((game) => game.input(Command.Up)) }}
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
