import {useEffect} from "react";

type KeyCallback = {
    key: string,
    f: () => void
}

function match(keyCallbacks: KeyCallback[], key: string): (() => void) | undefined {
    return keyCallbacks.find(keyCallback => keyCallback.key === key)?.f
}

export function useKeyDown(keyCallbacks: KeyCallback[], showKey: boolean = false) {
    useEffect(() => {
        document.addEventListener("keydown", e => {
            if (showKey) {
                console.log(e.key)
            }

            const callback = match(keyCallbacks, e.key)
            if (callback) {
                callback()
            }
        }, false);
        // eslint-disable-next-line
    }, [])
}
