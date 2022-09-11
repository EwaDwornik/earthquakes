import React from 'react';
import '../style/style.css';
import Map from "./Map";
import Charts from "./Charts";


function Visuals() {

    return (
        <div className="visuals">
            <Map/>
            <Charts/>
        </div>
    );
}

export default Visuals;

