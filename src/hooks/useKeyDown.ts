import {useEffect} from "react";
import {KeyCallback} from "./KeyCallback";
import {Command} from "../game/command";

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
    }, [keyCallbacks, showKey])
}

const key = {
    w: 'w',
    a: 'a',
    s: 's',
    d: 'd',
    l: 'l',
    k: 'k',
    down: 'ArrowDown',
    up: 'ArrowUp',
    right: 'ArrowRight',
    left: 'ArrowLeft',
    z: 'z',
    x: 'x',
    shift: 'Shift',
    space: ' ',
}

export function useKeyDown2(callback: (command: Command) => void, showKey: boolean = false) {

    const keyCallbacks = [
        { key: key.s,  f: () => { callback(Command.Down) }},
        { key: key.w,  f: () => { callback(Command.Up) }},
        { key: key.d,  f: () => { callback(Command.Right) }},
        { key: key.a,  f: () => { callback(Command.Left) }},
        { key: key.k,  f: () => { callback(Command.RotationLeft) }},
        { key: key.l,  f: () => { callback(Command.RotationRight) }},

        { key: key.down,  f: () => { callback(Command.Down) }},
        { key: key.up,  f: () => { callback(Command.Up) }},
        { key: key.right,  f: () => { callback(Command.Right) }},
        { key: key.left,  f: () => { callback(Command.Left) }},
        { key: key.z,  f: () => { callback(Command.RotationLeft) }},
        { key: key.x,  f: () => { callback(Command.RotationRight) }},

        { key: key.shift,  f: () => { callback(Command.Hold) }},
    ]

    useEffect(() => {
        const eventListener = createEventListener(keyCallbacks, showKey)

        document.addEventListener("keydown", eventListener, false)

        return () => {
            document.removeEventListener("keydown", eventListener)
        }
        // eslint-disable-next-line
    }, [keyCallbacks, showKey])
}
