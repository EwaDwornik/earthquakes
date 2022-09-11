import React, {useState, useContext} from 'react';
import '../style/style.css';
import {Context} from "../context/context";
import {formatDate} from "../services/utilities";

interface Range {
    min: number,
    max: number
}

const initialRange: Range = {
    min: 0,
    max: 5
}

export function Earthquakes() {
    const {earthquakes} = useContext(Context)
    const [range, setRange] = useState(initialRange);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setRange(initialRange)
        console.log(range.min)
        console.log(range.max)
    }

    const results = earthquakes.filter(eq => {
        return eq.size > range.min && eq.size < range.max
    })

    return (
        <div>
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

            <div className="content">

                <div className="dataTable">
                    <table className="table table-striped-columns text-center">
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
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
        ;
}

export default Earthquakes;

