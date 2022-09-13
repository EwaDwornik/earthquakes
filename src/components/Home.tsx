import React, {useState, useContext} from 'react';
import '../style/style.css';
import {Context} from "../context/context";
import {centerMap, containerStyleOneMarker, formatDate, initialMarker, initialRange} from "../services/utilities";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

//Main page where user can see a table
export function Earthquakes() {
    const {earthquakes} = useContext(Context);

    //states needed to search earthquakes in the table & showing a chosen one on a map
    const [range, setRange] = useState(initialRange);
    const [marker, setMarker] = useState(initialMarker);

    //sets up range picked by a user
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setRange(initialRange)
    }

    //filter that matches picked range with all earthquakes
    const results = earthquakes.filter(eq => {
        return eq.size > range.min && eq.size < range.max
    })

    return (
        <div className="container">
            <div className=" row g-0 text-center gy-5 gx-5 justify-content-center">
                <div className="col-6 col-md-4 align-self-center">
                    <div className="d-flex justify-content-center mb-5">
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <LoadScript googleMapsApiKey="">
                            <GoogleMap
                                mapContainerStyle={containerStyleOneMarker}
                                center={centerMap}
                                zoom={5}
                            >
                                <Marker position={marker}/>
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
                <div className="col-sm-6 col-md-8 d-flex justify-content-center">
                    <div>
                        {/* form to set up range of magnitude */}
                        <form onSubmit={handleSubmit} className="d-flex justify-content-center m-3">
                            <div className="col-md-3 m-3">
                                <label>min magnitude:</label>
                                <input
                                    type='number'
                                    min="0" max="5"
                                    step="0.1"
                                    className="form-control shake"
                                    required
                                    value={range.min}
                                    onChange={e => {
                                        setRange({...range, min: e.target.valueAsNumber});
                                    }}/>
                            </div>
                            <div className="col-md-3 m-3">
                                <label>max magnitude:</label>
                                <input
                                    type="number"
                                    min="0" max="5"
                                    step="0.1"
                                    className="form-control shake"
                                    value={range.max}
                                    onChange={e => {
                                        setRange({...range, max: e.target.valueAsNumber});
                                    }}/>
                            </div>
                        </form>
                        {/* table with chosen earthquakes */}
                        <div className="fixTableHead">
                            <table className="table table-striped text-center">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>latitude</th>
                                    <th>longitude</th>
                                    <th>depth</th>
                                    <th>magnitude</th>
                                    <th>quality</th>
                                    <th>location</th>
                                    <th>show</th>
                                </tr>
                                </thead>
                                <tbody>
                                {results.map((single, i: number) =>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{formatDate(single.timestamp)}</td>
                                        <td>{single.latitude}</td>
                                        <td>{single.longitude}</td>
                                        <td>{single.depth}</td>
                                        <td>{single.size}</td>
                                        <td>{single.quality}</td>
                                        <td>{single.humanReadableLocation}</td>
                                        <td>
                                            <button className="btn shake btn-outline-dark" onClick={e => {
                                                setMarker({...marker, lat: single.latitude, lng: single.longitude})
                                            }}>show
                                            </button>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earthquakes;

