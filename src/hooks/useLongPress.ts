import {useCallback, useRef} from "react";
import {Command} from "../game/command";
import {useGameHistory} from "./useGameHistory";

const firstTouchMilliSeconds = 300
const intervalMilliSeconds = 120

export const useLongPressMobile = (command: Command) => {
    const { updateRecentlyGame } = useGameHistory()
    let intervalRef: any = useRef(null)
    let timeoutRef: any = useRef(null)

    return useCallback(target => {
        target.addEventListener('touchstart', (e: any) => {
            e.preventDefault()

            updateRecentlyGame(game => game.input(command))

            timeoutRef.current = setTimeout(() => {
                intervalRef.current = setInterval(() => {
                    updateRecentlyGame(game => game.input(command))
                }, intervalMilliSeconds)
            }, firstTouchMilliSeconds)
        }, {passive: false})

        target.addEventListener('touchend', (e: any) => {
            e.preventDefault()

            if (intervalRef !== null) {
                clearInterval(intervalRef.current)
            }
            if (timeoutRef !== null) {
                clearTimeout(timeoutRef.current)
            }
        }, {passive: false})
        // eslint-disable-next-line
    }, [])
}
