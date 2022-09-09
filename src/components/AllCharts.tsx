import React, {useEffect, useState} from 'react';
import '../style/style.css';
import {Earthquake} from "../model";

function AllCharts() {
    const [list, setLists] = useState<Earthquake[]>([]);

    const refreshingOptions = [
        {value: 60000, label: '1 minute'},
        {value: 300000, label: '5 minutes'},
        {value: 900000, label: '15 minutes'},
        {value: 3600000, label: '1 hour'},
    ]

    useEffect(
        () => {
        const fetchData = async () => {

            const response = await fetch(
                "https://apis.is/earthquake/is "
            );
            const data = await response.json();
            list.sort((a, b) => (b.timestamp < a.timestamp) ? 1 : -1)
            setLists(data.results);

        };

        fetchData();
    }, []);


    const formatDate = (dateString: string) => {
        const options: any = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="content">
            <div className="selectTime">
                <select
                    className="form-select searching-child"
                    onChange={(e: any) => (e.target.value)}>
                    <option selected>Refresh pager every:</option>
                    <option value="1">1 minute</option>
                    <option value="2">2 minutes</option>
                    <option value="5">5 minutes</option>
                    <option value="10">10 minutes</option>

                </select></div>
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
                        <th>humanReadableLocation</th>
                    </tr>

                    {list.map((earthq, i: number) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{formatDate(earthq.timestamp)}</td>
                            <td>{earthq.latitude}</td>
                            <td>{earthq.longitude}</td>
                            <td>{earthq.depth}</td>
                            <td>{earthq.size}</td>
                            <td>{earthq.quality}</td>
                            <td>{earthq.humanReadableLocation}</td>
                        </tr>
                    )}

                    </thead>
                    </tbody>
                </table>
            </div>
        </div>


    )
        ;
};

export default AllCharts;

