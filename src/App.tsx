import React from 'react';
import {useKeyDown} from "./hooks/useKeyDown";
import {Command} from "./game/command";
import {Layout} from "./components/Layout";
import {useSetRecoilState} from "recoil";
import {useGameHistory} from "./hooks/useGameHistory";

const key = {
    down: 'ArrowDown',
    up: 'ArrowUp',
    right: 'ArrowRight',
    left: 'ArrowLeft',
    z: 'z',
    x: 'x',
}

function App() {
    const { updateRecentlyGame, addGame } = useGameHistory()
    useKeyDown([
        { key: key.down,  f: () => { updateRecentlyGame(game => game.input(Command.Down)) }},
        { key: key.up,  f: () => { addGame( game => game.input(Command.Up)) }},
        { key: key.right,  f: () => { updateRecentlyGame(game => game.input(Command.Right)) }},
        { key: key.left,  f: () => { updateRecentlyGame(game => game.input(Command.Left)) }},
        { key: key.z,  f: () => { updateRecentlyGame(game => game.input(Command.RotationLeft)) }},
        { key: key.x,  f: () => { updateRecentlyGame(game => game.input(Command.RotationRight)) }},
    ])

    return (
        <Layout/>
    );
}

export default App;
