import React, {useContext} from 'react';
import '../style/style.css';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {Context} from "../context/context";
import {centerMap} from "../services/utilities";


export function Map() {
    const {earthquakes} = useContext(Context)

    const containerStyle = {
        width: '500px',
        height: '370px'
    };

    const geoLocations = [{}];

    earthquakes.forEach((eartquake) => {
        geoLocations.push({lat: eartquake.latitude, lng: eartquake.longitude})
    })

    return (
        <div className="visuals">
            <LoadScript
                googleMapsApiKey=""
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={centerMap}
                    zoom={5.5}
                >
                    <>{
                        geoLocations.map((earthquake: any, id) => {
                            return <Marker
                                key={id}
                                position={earthquake}>
                            </Marker>
                        })
                    }</>

                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default Map;


