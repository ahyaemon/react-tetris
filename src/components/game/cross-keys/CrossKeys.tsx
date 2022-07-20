import React from 'react';
import './CrossKeys.scss';
import {useLongPressDesktop, useLongPressMobile} from "../../../hooks/useLongPress";
import {useResponsive} from "../../../hooks/useResponsive";
import {Command} from "../../../game/command";

type CrossKeysProps = {
    input: (command: Command) => void
}

const CrossKeysDesktop: React.FC<CrossKeysProps> = ({ input }) => {

    const setDownPressed = useLongPressDesktop(() => { input(Command.Down) })
    const setLeftPressed = useLongPressDesktop(() => { input(Command.Left) })
    const setRightPressed = useLongPressDesktop(() => { input(Command.Right) })

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={ () => { input(Command.Up) } }
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

const CrossKeysMobile: React.FC<CrossKeysProps> = ({ input }) => {

    const downRef = useLongPressMobile(() => { input(Command.Down) })
    const leftRef = useLongPressMobile(() => { input(Command.Left) })
    const rightRef = useLongPressMobile(() => { input(Command.Right) })

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={ () => { input(Command.Up) } }
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

export const CrossKeys: React.FC<CrossKeysProps> = ({ input }) => {

    const { isMobile, isDesktop } = useResponsive()

    return (
        <>
            { isDesktop && <CrossKeysDesktop input={input}/> }
            { isMobile && <CrossKeysMobile input={input}/>}
        </>
    )
}
