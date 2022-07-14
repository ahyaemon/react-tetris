import React from 'react';
import './RotationKeys.scss';
import {Command} from "../../../game/command";
import {useGameHistory} from "../../../hooks/useGameHistory";
import {GameStore} from "../../../stores/GameStore";

type RotationKeysProps = {
    gameStore: GameStore
}

export const RotationKeys: React.FC<RotationKeysProps> = (props) => {
    const { updateRecentlyGame } = useGameHistory(props.gameStore)

    return (
        <div className="rotationKeys">
            <div className="rotationKeys__right">
                <button
                    type="button"
                    onClick={() => { updateRecentlyGame(game => game.input(Command.RotationRight)) }}
                >R</button>
            </div>
            <div className="rotationKeys__left">
                <button
                    type="button"
                    onClick={() => { updateRecentlyGame(game => game.input(Command.RotationLeft)) }}
                >L</button>
            </div>
        </div>
    )
}
