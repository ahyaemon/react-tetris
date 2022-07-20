import React from 'react';
import './RotationKeys.scss';
import {Command} from "../../../game/command";

type RotationKeysProps = {
    input: {
        rotationRight: () => void,
        rotationLeft: () => void,
    }
}

export const RotationKeys: React.FC<RotationKeysProps> = ({ input }) => {
    return (
        <div className="rotationKeys">
            <div className="rotationKeys__right">
                <button
                    type="button"
                    onClick={() => { input.rotationRight() }}
                >R</button>
            </div>
            <div className="rotationKeys__left">
                <button
                    type="button"
                    onClick={() => { input.rotationLeft() }}
                >L</button>
            </div>
        </div>
    )
}

type RotationKeysProps2 = {
    input: (command: Command) => void
}

export const RotationKeys2: React.FC<RotationKeysProps2> = ({ input }) => {
    return (
        <div className="rotationKeys">
            <div className="rotationKeys__right">
                <button
                    type="button"
                    onClick={() => { input(Command.RotationRight) }}
                >R</button>
            </div>
            <div className="rotationKeys__left">
                <button
                    type="button"
                    onClick={() => { input(Command.RotationLeft) }}
                >L</button>
            </div>
        </div>
    )
}
