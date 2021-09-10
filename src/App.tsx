import React from 'react';
import {useKeyDown} from "./hooks/useKeyDown";
import {Command} from "./game/command";
import {Layout} from "./components/Layout";
import {useSetRecoilState} from "recoil";
import {game} from "./gameState";

const key = {
    down: 'ArrowDown',
    up: 'ArrowUp',
    right: 'ArrowRight',
    left: 'ArrowLeft',
    z: 'z',
    x: 'x',
}

function App() {
    const setGame = useSetRecoilState(game)
    useKeyDown([
        { key: key.down,  f: () => { setGame( (game) => game.input(Command.Down)) } },
        { key: key.up,  f: () => { setGame( (game) => game.input(Command.Up)) } },
        { key: key.right,  f: () => { setGame((game) => game.input(Command.Right)) } },
        { key: key.left,  f: () => { setGame((game) => game.input(Command.Left)) } },
        { key: key.z,  f: () => { setGame((game) => game.input(Command.RotationLeft)) } },
        { key: key.x,  f: () => { setGame((game) => game.input(Command.RotationRight)) } },
    ])

    return (
        <Layout/>
    );
}

export default App;
