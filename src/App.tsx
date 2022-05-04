import React from 'react';
import {useKeyDown} from "./hooks/useKeyDown";
import {Command} from "./game/command";
import {Layout} from "./components/Layout";
import {useGameHistory} from "./hooks/useGameHistory";
import {Game} from "./game/game";

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

function App() {
    const { updateRecentlyGame, addGame } = useGameHistory()
    useKeyDown([
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
    ])

    return (
        <Layout/>
    );
}

export default App;
