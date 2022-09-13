import React from 'react';
import '../style/style.css';
import Charts from "./Charts";
import MapAllMarkers from "./MapAllMarkers";

// charts, description and map with all earthquakes marked
function Visuals() {

    return (
        <div className="container">
            <div className="row d-flex justify-content-evenly">
                {/* description of visualisations */}
                <p className="col-6 d-flex justify-content-evenly mb-5 mt-5">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                {/* charts*/}
                <Charts/>
                {/* description of a map with markers and the map */}
                <p className="col-6 d-flex justify-content-evenly mb-5 mt-5">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <MapAllMarkers/>
        </div>
    );
}

export default Visuals;

