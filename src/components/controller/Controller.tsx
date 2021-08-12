/** @jsxImportSource @emotion/react */
import React from 'react';
import ControllerLeft from "./controller-left/ControllerLeft";
import ControllerRight from "./controller-right/ControllerRight";
import {css} from "@emotion/react";

const style = {
    controller: css({
        display: 'flex'
    }),
    controllerLeft: css({
        backgroundColor: '#fff7f7'
    }),
    controllerRight: css({
        backgroundColor: '#f7fdff'
    })
}

export default function Controller() {
    return (
        <div className="controller" css={style.controller}>
            <div css={style.controllerLeft}>
                <ControllerLeft/>
            </div>
            <div css={style.controllerRight}>
                <ControllerRight/>
            </div>
        </div>
    )
}
