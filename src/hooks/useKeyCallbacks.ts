import {GameStore, GameUpdateMethods} from "../stores/GameStore";
import {useGameUpdater} from "./useGameUpdater";
import {Command} from "../game/command";
import {Game} from "../game/game";

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

function input(command: Command) {
    return (game: Game) => game.input(command)
}

// TODO endless と practice で、接地した時の挙動が変わる
// practice では、テンプレートの更新も入る
// どう処理を分ける？
// -> 各 Command に対する更新処理を、store に持っておく？（場面によってコマンドの動きが変わる時は？ -> それは Game 側に任せる）
export function useKeyCallbacks (gameStore: GameStore, methods?: GameUpdateMethods) {
    const { updateRecentlyGame, addGame } = useGameUpdater(gameStore)
    // FIXME レンダリングされるたびにメソッドが再生成される問題をどうにかできないか
    return[
        { key: key.s,  f: () => { updateRecentlyGame(input(Command.Down)) }},
        { key: key.w,  f: () => { addGame( input(Command.Up)) }},
        { key: key.d,  f: () => { updateRecentlyGame(input(Command.Right)) }},
        { key: key.a,  f: () => { updateRecentlyGame(input(Command.Left)) }},
        { key: key.k,  f: () => { updateRecentlyGame(input(Command.RotationLeft)) }},
        { key: key.l,  f: () => { updateRecentlyGame(input(Command.RotationRight)) }},

        { key: key.down,  f: () => { updateRecentlyGame(input(Command.Down)) }},
        { key: key.up,  f: () => { addGame(input(Command.Up)) }},
        { key: key.right,  f: () => { updateRecentlyGame(input(Command.Right)) }},
        { key: key.left,  f: () => { updateRecentlyGame(input(Command.Left)) }},
        { key: key.z,  f: () => { updateRecentlyGame(input(Command.RotationLeft)) }},
        { key: key.x,  f: () => { updateRecentlyGame(input(Command.RotationRight)) }},

        { key: key.shift,  f: () => { addGame(game => game.hold()) }},
    ]
}

export function useKeyCallbacks2(methods: GameUpdateMethods) {
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
