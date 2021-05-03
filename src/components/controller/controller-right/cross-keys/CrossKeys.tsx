import React, {useContext} from 'react';
import './CrossKeys.scss';
import GameContext from "../../../../gameContext";

export default function CrossKeys() {
    const { gameState, setGameState } = useContext(GameContext)

    function handleClick() {
        setGameState({ value: gameState.value + 1})
    }

    return (
        <div className="crossKeys">
            <button type="button" onClick={handleClick}>{gameState.value}</button>
            <br/>
            <button type="button">左</button>
            <button type="button">右</button>
            <br/>
            <button type="button">下</button>
        </div>
    )
}
