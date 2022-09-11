import React, {useState, useContext} from 'react';
import '../style/style.css';
import {Context} from "../context/context";
import {centerMap, formatDate, initialMarker, initialRange} from "../services/utilities";
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';


export function Earthquakes() {
    const {earthquakes} = useContext(Context);
    const [range, setRange] = useState(initialRange);
    const [marker, setMarker] = useState(initialMarker);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setRange(initialRange)
    }

    const results = earthquakes.filter(eq => {
        return eq.size > range.min && eq.size < range.max
    })

    const containerStyle = {
        width: '350px',
        height: '200px'
    };

    return (
        <div className='container mx-auto'>
            <div className="col-6 col-md-3 sidenav">
                <LoadScript
                    googleMapsApiKey=""
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={centerMap}
                        zoom={5}
                    >
                        <Marker position={marker}/>
                    </GoogleMap>
                </LoadScript>
            </div>
            <div className="wider-grid">

                <h3>Live: earthquakes in Iceland </h3>

                <form onSubmit={handleSubmit} className="row content">
                    <div className="col-md-2">
                        <label>min magnitude:</label>
                        <input
                            type='number'
                            min="0" max="5"
                            step="0.1"
                            className="form-control"
                            required
                            value={range.min}
                            onChange={e => {
                                setRange({...range, min: e.target.valueAsNumber});
                            }}/>
                    </div>
                    <div className="col-md-2">
                        <label>max magnitude:</label>
                        <input
                            type="number"
                            min="0" max="5"
                            step="0.1"
                            className="form-control"
                            value={range.max}
                            onChange={e => {
                                setRange({...range, max: e.target.valueAsNumber});
                            }}/>
                    </div>
                </form>

                <div className="dataTable content">
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
                                    <button onClick={e => {
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
    )
}

export default Earthquakes;

