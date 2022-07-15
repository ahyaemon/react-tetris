import {useCallback, useEffect, useRef, useState} from "react";

const firstTouchMilliSeconds = 300
const intervalMilliSeconds = 80

export const useLongPressMobile = (f: () => void) => {
    let intervalRef: any = useRef(null)
    let timeoutRef: any = useRef(null)

    return useCallback((target: any) => {
        // react router による画面切り替え時にもこの callback が呼ばれてしまうため、
        // null の場合に即リターンすることによって対処する
        // この方法は多分あんまりよくない
        if (target === null) {
            return
        }

        target.addEventListener('touchstart', (e: any) => {
            e.preventDefault()

            f()

            timeoutRef.current = setTimeout(() => {
                intervalRef.current = setInterval(() => {
                    f()
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

export const useLongPressDesktop = (f:() => void) => {
    const [pressed, setPressed] = useState(false)
    let intervalRef: any = useRef(null)
    let timeoutRef: any = useRef(null)

    useEffect(() => {
        if (pressed) {
            f()
            timeoutRef.current = setTimeout(() => {
                intervalRef.current = setInterval(() => {
                    f()
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
