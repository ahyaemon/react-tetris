import {useEffect, useRef, useState} from "react";
import {Command} from "../game/command";

const firstTouchMilliSeconds = 300
const intervalMilliSeconds = 80

export const useCommandPressed = (command: Command, f:(command: Command) => void) => {
    const [pressed, setPressed] = useState(false)
    let intervalRef: any = useRef(null)
    let timeoutRef: any = useRef(null)

    useEffect(() => {
        if (pressed) {
            f(command)
            timeoutRef.current = setTimeout(() => {
                intervalRef.current = setInterval(() => {
                    f(command)
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
