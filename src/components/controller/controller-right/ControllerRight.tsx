import React from 'react';
import './ControllerRight.scss';
import CrossKeys from "./cross-keys/CrossKeys";
import RotationKeys from "./rotation-keys/RotationKeys";

export default function ControllerRight() {
    return (
        <div className="controllerRight">
            <div className="controllerRight__rotationKeys">
                <RotationKeys/>
            </div>
            <div className="controllerRight__crossKeys">
                <CrossKeys/>
            </div>
        </div>
    )
}
