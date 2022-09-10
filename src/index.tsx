import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Earthquakes from "./components/earthquakesDB";
import Charts from "./components/Chart";

ReactDOM.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/earthquakes" element={<Earthquakes/>}/>
            <Route path="/Charts" element={<Charts/>}/>
        </Routes>
    </Router>,

    document.getElementById("root"),
);

reportWebVitals();
