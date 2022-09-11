import React, {useContext} from 'react';
import '../style/style.css';
import {ChartNumberOfEarthquakes} from "../model";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import {Context} from "../context/context";


export function Charts() {
    const {earthquakes} = useContext(Context)

    let dataA = 0;
    let dataB = 0;
    let dataC = 0;
    let dataD = 0;
    let dataE = 0;
    let dataF = 0;

    earthquakes.forEach((earthquake) => {
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

    const numberOfEarthquakes: ChartNumberOfEarthquakes[] = [
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

    return (
        <div className="visuals">
            <div>

                <BarChart
                    width={500}
                    height={300}
                    data={numberOfEarthquakes}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" scale="point" padding={{left: 10, right: 10}}/>
                    <YAxis/>
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Bar dataKey="events" fill="#8884d8" background={{fill: "#eee"}}/>
                </BarChart>
                <p>Events sorted by magnitude</p>
                <p>Total number of events: {earthquakes.length}</p>
            </div>

        </div>
    );
}

export default Charts;



