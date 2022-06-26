import React from 'react';
import './CrossKeys.scss';
import {Command} from "../../../game/command";
import {useCommandPressed} from "../../../hooks/useCommandPressed";
import { useLongPressMobile } from "../../../hooks/useLongPress";
import { useMediaQuery } from 'react-responsive'
import {Game} from "../../../game/game";

type CrossKeysProps = {
    addGame: (f: (game: Game) => Game) => void,
    updateRecentlyGame: (f: (game: Game) => Game) => void,
}

const CrossKeysDesktop: React.FC<CrossKeysProps> = (props) => {
    const { addGame, updateRecentlyGame } = props
    const inputCommandToGame = (command: Command) => {
        updateRecentlyGame(game => game.input(command))
    }
    const setDownPressed = useCommandPressed(Command.Down, inputCommandToGame)
    const setLeftPressed = useCommandPressed(Command.Left, inputCommandToGame)
    const setRightPressed = useCommandPressed(Command.Right, inputCommandToGame)

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

const CrossKeysMobile: React.FC<CrossKeysProps> = (props) => {
    const { addGame, updateRecentlyGame } = props
    const inputCommandToGame = (command: Command) => {
        updateRecentlyGame(game => game.input(command))
    }
    const downRef = useLongPressMobile(Command.Down, inputCommandToGame)
    const leftRef = useLongPressMobile(Command.Left, inputCommandToGame)
    const rightRef = useLongPressMobile(Command.Right, inputCommandToGame)

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

export const CrossKeys: React.FC<CrossKeysProps> = (props) => {
    const { addGame, updateRecentlyGame } = props
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <>
            { isDesktop && <CrossKeysDesktop addGame={addGame} updateRecentlyGame={updateRecentlyGame}/> }
            { isMobile && <CrossKeysMobile addGame={addGame} updateRecentlyGame={updateRecentlyGame}/>}
        </>
    )
}
