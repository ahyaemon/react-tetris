import React from 'react';
import {Menu} from "./components/menu/Menu";
import { Routes, Route } from 'react-router-dom';
import {EndlessPage} from "./pages/endless/EndlessPage";
import {AboutPage} from "./pages/AboutPage";
import {PracticePage} from "./pages/practice/PracticePage";

function App() {

    return (
        <div>
            <Menu/>
            <Routes>
                <Route path="/" element={<EndlessPage />}/>
                <Route path="/practice" element={<PracticePage/>}/>
                <Route path="/about" element={<AboutPage />}/>
            </Routes>
        </div>
    );
}

export default App;
