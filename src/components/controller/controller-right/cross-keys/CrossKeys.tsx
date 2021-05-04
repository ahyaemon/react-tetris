import React, {useContext} from 'react';
import './CrossKeys.scss';
import GameContext from "../../../../gameContext";
import {input, Key } from "../../../../game/game";

export default function CrossKeys() {
    const { gameState, setGameState } = useContext(GameContext)

    return (
        <div className="crossKeys">
            <button
                type="button"
                onClick={() => { setGameState(input(gameState, Key.Up)) }}
            >
                {gameState.value}
            </button>
            <br/>
            <button type="button">左</button>
            <button type="button">右</button>
            <br/>
            <button type="button">下</button>
        </div>
    )
}
