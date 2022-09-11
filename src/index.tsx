import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import App from "./App";
import Visuals from "./components/Visuals";

ReactDOM.render(
    <App>
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/visuals" element={<Visuals/>}/>
        </Routes>
    </Router>
    </App>,

    document.getElementById("root"),
);

reportWebVitals();
