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
            <div className="crossKeys__up">
                <button
                    type="button"
                    onClick={() => { setGameState(game.input(Command.Up)) }}
                >上</button>
            </div>
            <div className="crossKeys__left">
                <button
                    type="button"
                    onClick={() => { setGameState(game.input(Command.Left)) }}
                >左</button>
            </div>
            <div className="crossKeys__right">
                <button
                    type="button"
                    onClick={() => { setGameState(game.input(Command.Right)) }}
                >右</button>
            </div>
            <div className="crossKeys__down">
                <button
                    type="button"
                    onClick={() => { setGameState(game.input(Command.Down)) }}
                >下</button>
            </div>
        </div>
    )
}
