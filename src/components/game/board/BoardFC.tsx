import React from 'react';
import CellC from "./cell/CellC";
import {Board} from "../../../game/game";
import styles from "./Board.module.scss";

type BoardProps = {
    boardState: Board,
}

export const BoardFC: React.FC<BoardProps> = (props) => {
    return (
        <div className={styles.board}>
            { props.boardState.rows.map((row, index) => (
                <div className={styles.row} key={index}>
                    { row.map((cell, index) => (
                        <div className="row__cells" key={index}>
                            <CellC color={cell}/>
                        </div>
                    )) }
                </div>
            )) }
        </div>
    )
}
