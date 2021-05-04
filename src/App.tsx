import React, {useState} from 'react';
import './App.scss';
import Screen from "./components/screen/Screen";
import Controller from "./components/controller/Controller";
import GameContext from "./gameContext";
import {initialGameState} from "./game/game";
import {useKeyDown} from "./hooks/useKeyDown";

const key = {
    down: 'ArrowDown',
    up: 'ArrowUp'
}

function App() {
    const [gameState, setGameState] = useState(initialGameState)
    useKeyDown([
        {
            key: key.down,
            f: () => { console.log('down') }
        },
        {
            key: key.up,
            f: () => { console.log('up') }
        }
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
