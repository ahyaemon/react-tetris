import React from 'react';
import './RotationKeys.scss';
import {Command} from "../../../game/command";
import {useGameHistory} from "../../../hooks/useGameHistory";
import {endlessStore} from "../../../stores/GameStore";

export default function RotationKeys() {
    const { updateRecentlyGame } = useGameHistory(endlessStore)

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
