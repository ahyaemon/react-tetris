import {useEffect, useRef} from "react";

type KeyCallback = {
    key: string,
    f: () => void
}

function match(keyCallbacks: KeyCallback[], key: string): (() => void) | undefined {
    return keyCallbacks.find(keyCallback => keyCallback.key === key)?.f
}

function createEventListener(keyCallbacks: KeyCallback[], showKey: boolean) {
    return (e: KeyboardEvent) => {
        if (showKey) {
            console.log(e.key)
        }

        const callback = match(keyCallbacks, e.key)
        if (callback) {
            callback()
        }
    }
}

export function useKeyDown(keyCallbacks: KeyCallback[], showKey: boolean = false) {

    useEffect(() => {
        const eventListener = createEventListener(keyCallbacks, showKey)

        document.addEventListener("keydown", eventListener, false)

        return () => {
            document.removeEventListener("keydown", eventListener)
        }
        // eslint-disable-next-line
    }, [showKey])
}
