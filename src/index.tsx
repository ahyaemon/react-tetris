import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RecoilRoot} from "recoil";
import './popup.css';
import './global.css';
import './menu.css';
import {HashRouter} from "react-router-dom";

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <HashRouter basename="/">
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
