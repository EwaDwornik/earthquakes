import React, { useState, useEffect } from "react";
import {Earthquake} from "../model";


export const Home = () => {
    const [list, setLists] = useState<Earthquake[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://apis.is/earthquake/is "
            );
            const data = await response.json();
            setLists(data.results);
        };

        fetchData();
    }, []);

    labels: {


    }


    return (
        <ul>
            {list.map(({ timestamp, humanReadableLocation }) => (
                <li key={timestamp}>{humanReadableLocation}</li>
            ))}
        </ul>
    );
};

export default Home;

