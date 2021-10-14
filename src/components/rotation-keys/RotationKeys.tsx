import React from 'react';
import './RotationKeys.scss';
import {Command} from "../../game/command";
import {useSetRecoilState} from "recoil";
import {useGameHistory} from "../../hooks/useGameHistory";

export default function RotationKeys() {
    const { updateRecentlyGame, addGame } = useGameHistory()

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
