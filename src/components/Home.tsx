import React, {useContext} from 'react';
import '../style/style.css';
import {Context} from "../context/context";
import {formatDate} from "../services/utilities";


export function Earthquakes() {
    const {earthquakes} = useContext(Context)

    return (
        <div className="content">

            <div className="dataTable">
                <table className="table table-striped-columns text-center">
                    <tbody>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>latitude</th>
                        <th>longitude</th>
                        <th>depth</th>
                        <th>size</th>
                        <th>quality</th>
                        <th>Location</th>
                    </tr>

                    {earthquakes.map((single, i: number) =>
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

                    </thead>
                    </tbody>
                </table>
            </div>
        </div>
    )
        ;
}
export default Earthquakes;

