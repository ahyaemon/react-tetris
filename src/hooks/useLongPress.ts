import {useCallback, useContext, useEffect, useRef, useState} from "react";
import GameContext from "../gameContext";
import {Command} from "../game/command";
import {game} from "../App";

export const useLongPressDesktop = (command: Command) => {
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

export const useLongPressMobile = (command: Command) => {

    // eslint-disable-next-line
    const { gameState, setGameState } = useContext(GameContext)

    let intervalRef: any = useRef(null)

    let timeoutRef: any = useRef(null)

    const tagRef = useCallback(target => {
        target.addEventListener('touchstart', (e: any) => {
            e.preventDefault()

            setGameState(game.input(command))

            timeoutRef.current = setTimeout(() => {
                intervalRef.current = setInterval(() => {
                    setGameState(game.input(command))
                }, 120)
            }, 300)
        }, { passive: false })

        target.addEventListener('touchend', (e: any) => {
            e.preventDefault()

            if (intervalRef !== null) {
                clearInterval(intervalRef.current)
            }
            if (timeoutRef !== null) {
                clearTimeout(timeoutRef.current)
            }
        }, { passive: false })
        // eslint-disable-next-line
    }, [])

    return tagRef
}
