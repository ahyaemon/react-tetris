import React from 'react';
import {Menu} from "./components/menu/Menu";
import { Routes, Route } from 'react-router-dom';
import {GamePage} from "./pages/GamePage";

function App() {

    return (
        <div>
            <Menu/>
            <Routes>
                <Route path="/react-tetris" element={<GamePage />}/>
            </Routes>
        </div>
    );
}

export default App;
