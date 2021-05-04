import React, {useContext} from 'react';
import './Board.scss';
import GameContext from "../../../../gameContext";
import Row from "./row/Row";

export default function Board() {
    const { gameState } = useContext(GameContext)

    return (
        <div className="board">
            { gameState.rows.map((row, index) => (
                <div className="board__row" key={index}>
                    <Row cells={row}/>
                </div>
            )) }
        </div>
    )
}
