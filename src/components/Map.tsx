import React, {useContext} from 'react';
import '../style/style.css';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {Context} from "../context/context";


export function Map() {
    const {earthquakes} = useContext(Context)

    const containerStyle = {
        width: '600px',
        height: '400px'
    };

    const center = {
        lat: 65.005,
        lng: -18.677
    };

    const geoLocations = [{}];

    earthquakes.forEach((eartquake) => {
        geoLocations.push({lat: eartquake.latitude, lng: eartquake.longitude, size: eartquake.size})
    })



    return (
        <div className="visuals">

            <LoadScript
                googleMapsApiKey="AIzaSyDGFlWnT7V8PIvcGAvCtgkIWWIrzLpUpgg"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={6}
                >
                    <>{
                        geoLocations.map((earthquake: any, id) => {
                            return <Marker
                                key={id}
                                position={earthquake}
                                title={earthquake.size}
                            >
                            </Marker>
                        })
                    }</>

                </GoogleMap>
            </LoadScript>

        </div>
    );
}

export default Map;
