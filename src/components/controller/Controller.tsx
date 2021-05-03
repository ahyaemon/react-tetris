import React from 'react';
import './Controller.scss';
import ControllerLeft from "./controller-left/ControllerLeft";
import ControllerRight from "./controller-right/ControllerRight";

export default function Controller() {
    return (
        <div className="controller">
            <div className="controller__left">
                <ControllerLeft/>
            </div>
            <div className="controller__right">
                <ControllerRight/>
            </div>
        </div>
    )
}
