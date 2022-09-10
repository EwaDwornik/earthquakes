import React, {useEffect, useState} from 'react';
import '../style/style.css';
import {Earthquake} from "../model";
import {earthquakesDB} from "./earthquakesDB";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';



function Charts() {
    const [list, setLists] = useState<Earthquake[]>([]);
    let [selectTime, setSelectTime] = useState<number>();

    useEffect(() => {
        let interval = setInterval(async () => {
            const url = "https://apis.is/earthquake/is ";
            const response = await fetch(url);
            const data = await response.json();
            setLists(data.results);
            if (!selectTime) {
                setSelectTime(900000);
            }
            console.log(selectTime)
        }, selectTime)
        return () => {
            clearInterval(interval);
        }
    }, [selectTime]);

    let dataA = 0;
    let dataB = 0;
    let dataC = 0;
    let dataD = 0;
    let dataE = 0;
    let dataF = 0;

    list.forEach((earthquake) => {
        if (earthquake.size >= 0 && earthquake.size < 0.5) {
            dataA++
        } else if (earthquake.size >= 0.5 && earthquake.size < 1) {
            dataB++
        } else if (earthquake.size >= 1 && earthquake.size < 1.5) {
            dataC++
        } else if (earthquake.size >= 1.5 && earthquake.size < 2) {
            dataD++
        } else if (earthquake.size >= 2 && earthquake.size < 2.5) {
            dataE++
        } else if (earthquake.size >= 2.5) {
            dataF++
        }
    })


    const data = [
        {
            name: "0-0.5",
            events: dataA,
        },
        {
            name: "0.5-1.0",
            events: dataB,
        },
        {
            name: "1.0-1.5",
            events: dataC,
        },
        {
            name: "1.5-2.0",
            events: dataD,
        },
        {
            name: "2.0-2.5",
            events: dataE,
        },
        {
            name: ">2.5",
            events: dataF,
        }
    ];
    const containerStyle = {
        width: '600px',
        height: '400px'
    };

    const center = {
        lat: 64.605,
        lng: -18.677
    };

    const geoLocations = [{}];

    list.forEach((eartquake) => {
        geoLocations.push({lat: eartquake.latitude, lng: eartquake.longitude})
    })

    console.log(geoLocations)

    return (
        <div className="content">
            <div>
                <p>Number of events bigger or equal </p>
                <p>Total number from: {list.length}</p>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="events" fill="#8884d8" background={{ fill: "#eee" }} />
                </BarChart>
            </div>
            <LoadScript
                googleMapsApiKey="AIzaSyDGFlWnT7V8PIvcGAvCtgkIWWIrzLpUpgg"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >

                    <>{
                        geoLocations.map((earthquake: any) => {
                            return <Marker position={earthquake}/>
                        })
                    }</>

                </GoogleMap>
            </LoadScript>
        </div>
    )
        ;
};

export default Charts;

