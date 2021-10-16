import {useEffect, useRef, useState} from "react";
import {Command} from "../game/command";
import {useGameHistory} from "./useGameHistory";

const firstTouchMilliSeconds = 300
const intervalMilliSeconds = 80

export const useCommandPressed = (command: Command) => {
    const { updateRecentlyGame } = useGameHistory()
    const [pressed, setPressed] = useState(false)
    let intervalRef: any = useRef(null)
    let timeoutRef: any = useRef(null)

    useEffect(() => {
        if (pressed) {
            updateRecentlyGame(game => game.input(command))
            timeoutRef.current = setTimeout(() => {
                intervalRef.current = setInterval(() => {
                    updateRecentlyGame(game => game.input(command))
                }, intervalMilliSeconds)
            }, firstTouchMilliSeconds)
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
