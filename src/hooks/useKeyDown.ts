import {useEffect} from "react";

type KeyF = {
    key: string,
    f: () => void
}

export function useKeyDown(keyFs: KeyF[]) {
    useEffect(() => {
        document.addEventListener("keydown", e => {
            const keyF = keyFs.find(keyF => keyF.key === e.key)
            if (keyF) {
                keyF.f()
            }

        }, false);
    }, [])
}
