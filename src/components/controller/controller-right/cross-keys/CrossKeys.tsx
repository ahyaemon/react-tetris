import React, {useContext} from 'react';
import './CrossKeys.scss';
import GameContext from "../../../../gameContext";
import {game} from "../../../../App";
import {Command} from "../../../../game/command";

export default function CrossKeys() {
    // eslint-disable-next-line
    const { gameState, setGameState } = useContext(GameContext)

    return (
        <div className="crossKeys">
            <button
                type="button"
                onClick={() => { setGameState(game.input(Command.Up)) }}
            >上</button>
            <br/>
            <button
                type="button"
                onClick={() => { setGameState(game.input(Command.Left)) }}
            >左</button>
            <button
                type="button"
                onClick={() => { setGameState(game.input(Command.Right)) }}
            >右</button>
            <br/>
            <button
                type="button"
                onClick={() => { setGameState(game.input(Command.Down)) }}
            >下</button>
        </div>
    )
}
