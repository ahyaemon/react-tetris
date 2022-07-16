import React from 'react';
import './RotationKeys.scss';

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
