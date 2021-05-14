import React, {useContext} from 'react';
import './RotationKeys.scss';
import GameContext from "../../../../gameContext";
import {Command} from "../../../../game/game";
import {game} from "../../../../App";

export default function RotationKeys() {
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
