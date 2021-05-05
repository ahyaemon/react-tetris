import React, {useState} from 'react';
import './App.scss';
import Screen from "./components/screen/Screen";
import Controller from "./components/controller/Controller";
import GameContext from "./gameContext";
import {Command, Game} from "./game/game";
import {useKeyDown} from "./hooks/useKeyDown";

const key = {
    down: 'ArrowDown',
    up: 'ArrowUp',
    right: 'ArrowRight',
    left: 'ArrowLeft',
}

export const game = Game.create()

function App() {
    const [gameState, setGameState] = useState(game.state)
    useKeyDown([
        { key: key.down,  f: () => { setGameState(game.input(Command.Down)) } },
        { key: key.up,  f: () => { setGameState(game.input(Command.Up)) } },
        { key: key.right,  f: () => { setGameState(game.input(Command.Right)) } },
        { key: key.left,  f: () => { setGameState(game.input(Command.Left)) } },
    ])

    return (
        <GameContext.Provider value={{gameState, setGameState}}>
            <div className="app">

                <header className="app__header">tetris simulator</header>
                <div className="app__screen">
                    <Screen/>
                </div>
                <div className="app_controller">
                    <Controller/>
                </div>
            </div>
        </GameContext.Provider>
    );
}

export default App;
