import React from 'react';
import './CrossKeys.scss';
import {Command} from "../../../game/command";
import {useLongPressDesktop, useLongPressMobile} from "../../../hooks/useLongPress";
import {Game} from "../../../game/game";
import {useResponsive} from "../../../hooks/useResponsive";

type CrossKeysProps = {
    addGame: (f: (game: Game) => Game) => void,
    updateRecentlyGame: (f: (game: Game) => Game) => void,
}

// TODO 下を押した時何が起きるか、上を押した時何が起きるか、といったように各コマンドに対する関数を props で受け取るようにする
const CrossKeysDesktop: React.FC<CrossKeysProps> = (props) => {
    const { addGame, updateRecentlyGame } = props
    const inputCommandToGame = (command: Command) => () => {
        updateRecentlyGame(game => game.input(command))
    }
    const setDownPressed = useLongPressDesktop(inputCommandToGame(Command.Down))
    const setLeftPressed = useLongPressDesktop(inputCommandToGame(Command.Left))
    const setRightPressed = useLongPressDesktop(inputCommandToGame(Command.Right))

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
    const inputCommandToGame = (command: Command) => () => {
        updateRecentlyGame(game => game.input(command))
    }
    const downRef = useLongPressMobile(inputCommandToGame(Command.Down))
    const leftRef = useLongPressMobile(inputCommandToGame(Command.Left))
    const rightRef = useLongPressMobile(inputCommandToGame(Command.Right))

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

    const { isMobile, isDesktop } = useResponsive()

    return (
        <>
            { isDesktop && <CrossKeysDesktop addGame={addGame} updateRecentlyGame={updateRecentlyGame}/> }
            { isMobile && <CrossKeysMobile addGame={addGame} updateRecentlyGame={updateRecentlyGame}/>}
        </>
    )
}
