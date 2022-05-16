import React from 'react';
import {Menu} from "./components/menu/Menu";
import { Routes, Route } from 'react-router-dom';
import {GamePage} from "./pages/GamePage";
import {AboutPage} from "./pages/AboutPage";
import {PracticePage} from "./pages/PracticePage";

function App() {

    return (
        <div>
            <Menu/>
            <Routes>
                <Route path="/react-tetris" element={<GamePage />}/>
                <Route path="/react-tetris/practice" element={<PracticePage/>}/>
                <Route path="/react-tetris/about" element={<AboutPage />}/>
            </Routes>
        </div>
    );
}

export default App;
