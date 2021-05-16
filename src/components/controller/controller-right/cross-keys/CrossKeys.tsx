import React, {useContext} from 'react';
import './CrossKeys.scss';
import GameContext from "../../../../gameContext";
import {game} from "../../../../App";
import {Command} from "../../../../game/command";
import {useCommandPressed} from "../../../../hooks/useCommandPressed";

export default function CrossKeys() {
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
                onTouchStart={ () => setLeftPressed(true) }
                onTouchEnd={ () => setLeftPressed(false ) }
            >
            </div>
            <div
                className="crossKeys__right crossKey"
                onMouseDown={ () => setRightPressed(true) }
                onMouseUp={ () => setRightPressed(false ) }
                onTouchStart={ () => setRightPressed(true) }
                onTouchEnd={ () => setRightPressed(false ) }
            >
            </div>
            <div
                className="crossKeys__down crossKey"
                onMouseDown={ () => setDownPressed(true) }
                onMouseUp={ () => setDownPressed(false ) }
                onTouchStart={ () => setDownPressed(true) }
                onTouchEnd={ () => setDownPressed(false ) }
            >
            </div>
        </div>
    )
}
