import React from 'react';
import './CrossKeys.scss';
import {useLongPressDesktop, useLongPressMobile} from "../../../hooks/useLongPress";
import {useResponsive} from "../../../hooks/useResponsive";

type CrossKeysProps = {
    input: {
        up: () => void,
        right: () => void,
        down: () => void,
        left: () => void,
    }
}

const CrossKeysDesktop: React.FC<CrossKeysProps> = ({ input }) => {

    const setDownPressed = useLongPressDesktop(input.down)
    const setLeftPressed = useLongPressDesktop(input.left)
    const setRightPressed = useLongPressDesktop(input.right)

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={input.up}
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

    const downRef = useLongPressMobile(input.down)
    const leftRef = useLongPressMobile(input.left)
    const rightRef = useLongPressMobile(input.right)

    return (
        <div className="crossKeys">
            <div
                className="crossKeys__up crossKey"
                onClick={input.up}
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
