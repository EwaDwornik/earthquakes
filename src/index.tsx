import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AllCharts from "./components/AllCharts";

ReactDOM.render(
    <Router>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/all" element={<AllCharts/>}/>
        </Routes>
    </Router>,

    document.getElementById("root"),
);

reportWebVitals();
