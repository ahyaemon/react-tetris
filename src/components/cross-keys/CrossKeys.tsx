import React, {useContext} from 'react';
import './CrossKeys.scss';
import GameContext from "../../gameContext";
import {game} from "../../App";
import {Command} from "../../game/command";
import {useCommandPressed} from "../../hooks/useCommandPressed";
import { useLongPressMobile } from "../../hooks/useLongPress";
import { useMediaQuery } from 'react-responsive'

function CrossKeysDesktop() {
    // eslint-disable-next-line
    const { gameState, setGameState } = useContext(GameContext)
    const setDownPressed = useCommandPressed(Command.Down)
    const setLeftPressed = useCommandPressed(Command.Left)
    const setRightPressed = useCommandPressed(Command.Right)

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={() => { setGameState(game.input(Command.Up)) }}
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
    const { gameState, setGameState } = useContext(GameContext)
    const downRef = useLongPressMobile(Command.Down)
    const leftRef = useLongPressMobile(Command.Left)
    const rightRef = useLongPressMobile(Command.Right)

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={() => { setGameState(game.input(Command.Up)) }}
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
