import css from "./EndlessPage.module.scss"
import {useGameUpdater} from "../../hooks/useGameUpdater";
import {useKeyDown} from "../../hooks/useKeyDown";
import {useRecoilValue} from "recoil";
import {Board} from "../../components/game/board/Board";
import {CrossKeys} from "../../components/game/cross-keys/CrossKeys";
import {RotationKeys} from "../../components/game/rotation-keys/RotationKeys";
import React from "react";
import {endlessStore} from "../../stores/GameStore";
import {KeyboardExplanation} from "../../components/KeyboardExplanation";
import {EndlessRight} from "./EndlessRight";
import {EndlessLeft} from "./EndlessLeft";
import {useKeyCallbacks} from "../../hooks/useKeyCallbacks";
import {useResponsive} from "../../hooks/useResponsive";
import {Command} from "../../game/command";

export function EndlessPage() {

    const { updateRecentlyGame, addGame } = useGameUpdater(endlessStore)

    const keyCallbacks = useKeyCallbacks(endlessStore)

    useKeyDown(keyCallbacks)

    const { isDesktop } = useResponsive()

    const boardState = useRecoilValue(endlessStore.board)

    const input = {
        up: () => addGame(game => game.input(Command.Up)),
        right: () => updateRecentlyGame(game => game.input(Command.Right)),
        down: () => updateRecentlyGame(game => game.input(Command.Down)),
        left: () => updateRecentlyGame(game => game.input(Command.Left)),
    }

    return (
        <div>
            <div className={css.top}>
                <div className={css.topLeft}>
                    <EndlessLeft/>
                </div>
                <div className={css.board}>
                    <Board boardState={boardState}/>
                </div>
                <div>
                    <EndlessRight/>
                </div>
            </div>
            <div className={css.bottom}>
                <div>
                    <CrossKeys input={input}/>
                </div>
                <div className={css.rotationKeys}>
                    <RotationKeys gameStore={endlessStore}/>
                </div>
            </div>
            {
                isDesktop && <KeyboardExplanation/>
            }
        </div>
    )
}
