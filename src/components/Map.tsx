import React, {useContext} from 'react';
import '../style/style.css';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import {Context} from "../context/context";
import {centerMap, containerStyleAllMarkers} from "../services/utilities";

//map where you can see where are all the earthquakes in Iceland
export function Map() {
    const {earthquakes} = useContext(Context)

    //creating an array where we store all markers of all earthquakes
    const geoLocations = [{}];
    earthquakes.forEach((eartquake) => {
        geoLocations.push({lat: eartquake.latitude, lng: eartquake.longitude})
    })

    return (
        <div className="box">
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

export default Map;


