import React from 'react';
import './App.scss';
import Screen from "./components/screen/Screen";
import Controller from "./components/controller/Controller";

function App() {
    return (
        <div className="app">
            <header className="app__header">tetris simulator</header>
            <div className="app__screen">
                <Screen/>
            </div>
            <div className="app_controller">
                <Controller/>
            </div>
        </div>
    );
}

export default App;
