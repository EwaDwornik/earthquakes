import React, {useEffect, useState} from 'react';
import '../style/style.css';
import {Earthquake} from "../model";

function AllCharts() {
    const [list, setLists] = useState<Earthquake[]>([]);
    let [selectTime, setSelectTime] = useState<number>();

    function handleChange(event: any) {
        setSelectTime(event.target.value)
    }


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

    const timeOptions = [
        {value: 1000, label: '1 second'},
        {value: 2000, label: '2 seconds'},
        {value: 60000, label: '1 minute'},
        {value: 120000, label: '2 minutes'},
        {value: 300000, label: '5 minutes'},
        {value: 900000, label: '15 minutes'},
    ]

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
                    value={selectTime}
                    onChange={handleChange}>
                    {timeOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
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

