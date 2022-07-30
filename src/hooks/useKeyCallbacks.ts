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

type GameUpdater = () => void

type GameUpdateMethods = {
    up: GameUpdater,
    right: GameUpdater,
    down: GameUpdater,
    left: GameUpdater,
    rotationRight: GameUpdater,
    rotationLeft: GameUpdater,
    hold: GameUpdater,
}

export function useKeyCallbacks(methods: GameUpdateMethods) {
    return [
        { key: key.s,  f: () => { methods.down() }},
        { key: key.w,  f: () => { methods.up() }},
        { key: key.d,  f: () => { methods.right() }},
        { key: key.a,  f: () => { methods.left() }},
        { key: key.k,  f: () => { methods.rotationLeft() }},
        { key: key.l,  f: () => { methods.rotationRight() }},

        { key: key.down,  f: () => { methods.down() }},
        { key: key.up,  f: () => { methods.up() }},
        { key: key.right,  f: () => { methods.right() }},
        { key: key.left,  f: () => { methods.left() }},
        { key: key.z,  f: () => { methods.rotationLeft() }},
        { key: key.x,  f: () => { methods.rotationRight() }},

        { key: key.shift,  f: () => { methods.hold() }},
    ]
}
