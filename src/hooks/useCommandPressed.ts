import {useEffect, useRef, useState} from "react";
import {Command} from "../game/command";
import {useSetRecoilState} from "recoil";
import {game} from "../gameState";

export const useCommandPressed = (command: Command) => {
    // eslint-disable-next-line
    const setGame = useSetRecoilState(game)
    const [pressed, setPressed] = useState(false)
    let intervalRef: any = useRef(null)
    let timeoutRef: any = useRef(null)

    useEffect(() => {
        if (pressed) {
            setGame(game => game.input(command))
            timeoutRef.current = setTimeout(() => {
                intervalRef.current = setInterval(() => {
                    setGame(game => game.input(command))
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
