import React from 'react';
import './RotationKeys.scss';
import {Command} from "../../game/command";
import {useSetRecoilState} from "recoil";
import {game} from "../../gameState";

export default function RotationKeys() {
    // eslint-disable-next-line
    const setGame = useSetRecoilState(game)

    return (
        <div className="rotationKeys">
            <div className="rotationKeys__right">
                <button
                    type="button"
                    onClick={() => { setGame(game => game.input(Command.RotationRight)) }}
                >R</button>
            </div>
            <div className="rotationKeys__left">
                <button
                    type="button"
                    onClick={() => { setGame(game => game.input(Command.RotationLeft)) }}
                >L</button>
            </div>
        </div>
    )
}
