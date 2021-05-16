import {useContext, useEffect, useRef, useState} from "react";
import GameContext from "../gameContext";
import {Command} from "../game/command";
import {game} from "../App";

export const useCommandPressed = (command: Command) => {
    // eslint-disable-next-line
    const { gameState, setGameState } = useContext(GameContext)

    const [pressed, setPressed] = useState(false)
    let intervalRef: any = useRef(null)
    let timeoutRef: any = useRef(null)

    useEffect(() => {
        if (pressed) {
            setGameState(game.input(command))
            timeoutRef.current = setTimeout(() => {
                intervalRef.current = setInterval(() => {
                    setGameState(game.input(command))
                }, 120)
            }, 300)
        } else {
            if (intervalRef !== null) {
                clearInterval(intervalRef.current)
            }
            if (timeoutRef !== null) {
                clearTimeout(timeoutRef.current)
            }
        }
        // eslint-disable-next-line
    }, [pressed])

    return setPressed
}
