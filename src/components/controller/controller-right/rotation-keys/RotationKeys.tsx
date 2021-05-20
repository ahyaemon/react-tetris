import React, {useContext} from 'react';
import './RotationKeys.scss';
import GameContext from "../../../../gameContext";
import {game} from "../../../../App";
import {Command} from "../../../../game/command";

export default function RotationKeys() {
    // eslint-disable-next-line
    const { gameState, setGameState } = useContext(GameContext)

    return (
        <div className="rotationKeys">
            <div className="rotationKeys__right">
                <button
                    type="button"
                    onClick={() => { setGameState(game.input(Command.RotationRight)) }}
                >R</button>
            </div>
            <div className="rotationKeys__left">
                <button
                    type="button"
                    onClick={() => { setGameState(game.input(Command.RotationLeft)) }}
                >L</button>
            </div>
        </div>
    )
}
