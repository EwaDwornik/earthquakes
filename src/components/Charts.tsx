import React, {useContext} from 'react';
import '../style/style.css';
import {SizeDepthQuality, ChartNumberOfEarthquakes} from "../model";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";
import {
    ScatterChart,
    Scatter,
    ZAxis,
    Legend,
} from 'recharts';
import {Context} from "../context/context";




//all Charts
export function Charts() {
    const {earthquakes} = useContext(Context)

    //data for the events/magnitude chart
        //first chart, segregating magnitude value
    let dataA = 0; //0-0.5
    let dataB = 0; //0.5-1
    let dataC = 0; //1-1.5
    let dataD = 0; //1.5-2
    let dataE = 0; //2-2.5
    let dataF = 0; //>2.5

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


    //data for the depth/quality/magnitude, second chart
    const sizeDepthQualityChart: SizeDepthQuality[] = []

    earthquakes.forEach((earthquake) => {
        sizeDepthQualityChart.push({size: earthquake.size, depth: earthquake.depth, quality: earthquake.quality})
    })

    return (
        <div className="visuals">
             {/*first chart */}
            <div>
                <BarChart
                    width={500}
                    height={400}
                    data={numberOfEarthquakes}
                    barSize={20}
                >
                    <XAxis dataKey="name" label={{value: 'magnitude', position: 'insideBottomRight', offset: -5}} scale="point" padding={{left: 10, right: 10}}/>
                    <YAxis />
                    <Tooltip/>
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Bar dataKey="events" fill="#8884d8" background={{fill: "#eee"}}/>
                </BarChart>
            </div>
            <div>
                    <ScatterChart
                        width={500}
                        height={400}
                    >
                        <CartesianGrid />
                        <XAxis type="number" label={{value: 'quality', position: 'insideBottomRight', offset: -5}} dataKey="quality" name="quality" />
                        <YAxis type="number" label={{value: 'depth', angle: -90, position: 'insideLeft', offset: 30}} dataKey="depth" name="depth" />
                        <ZAxis type="number" dataKey="size" name="magnitude" range={[0, 100]} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                        <Legend />
                        <Scatter name="Magnitude" data={sizeDepthQualityChart} fill="#8884d8" shape="triangle" />
                    </ScatterChart>
            </div>
        </div>
    );
}

export default Charts;



