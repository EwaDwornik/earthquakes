import React, {useContext} from 'react';
import '../style/style.css';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {Context} from "../context/context";
import {centerMap, containerStyleAllMarkers} from "../services/utilities";

//map where you can see where are all the earthquakes in Iceland
export function MapAllMarkers() {
    const {earthquakes} = useContext(Context)

    //creating an array where we store all markers of all earthquakes
    const geoLocations = [{}];
    earthquakes.forEach((earthquake) => {
        geoLocations.push({lat: earthquake.latitude, lng: earthquake.longitude})
    })

    return (
        <div className="row g-0 gy-5 gx-3 justify-content-center">
            {/* Map with all markers */}
            <LoadScript googleMapsApiKey="">
                <GoogleMap
                    mapContainerStyle={containerStyleAllMarkers}
                    center={centerMap}
                    zoom={5.5}
                >
                    {geoLocations.map((earthquake: any, id) => {
                        return <Marker
                            key={id}
                            position={earthquake}>
                        </Marker>
                    })
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default MapAllMarkers;