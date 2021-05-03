import React from 'react';
import './ControllerRight.scss';
import CrossKeys from "./cross-keys/CrossKeys";

export default function ControllerRight() {
    return (
        <div className="controllerRight">
            <div className="controllerRight__crossKeys">
                <CrossKeys/>
            </div>
        </div>
    )
}
