import React, {useContext} from 'react';
import './RotationKeys.scss';
import GameContext from "../../../../gameContext";
import {game} from "../../../../App";
import {Command} from "../../../../game/command";

export default function RotationKeys() {
    // eslint-disable-next-line
    const { gameState, setGameState } = useContext(GameContext)

    return (
        <div className="crossKeys">
            <button
                type="button"
                onClick={() => { setGameState(game.input(Command.RotationLeft)) }}
            >左回転</button>
            <br/>
            <button
                type="button"
                onClick={() => { setGameState(game.input(Command.RotationRight)) }}
            >右回転</button>
        </div>
    )
}
