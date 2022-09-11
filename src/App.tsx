import React, {useEffect, useState} from 'react';
import './App.css';
import {Earthquake} from "./model";
import {Context} from "./context/context";

export function App (props: any) {
    const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
    const [selectTime, setSelectTime] = useState<number>(0);

    const getData = async () => {
        const url = "https://apis.is/earthquake/is ";
        const response = await fetch(url);
        const data = await response.json();
        setEarthquakes(data.results)
    }

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (!selectTime) {
            return;
        }

        const interval = setInterval(async () => {
            await getData()

        }, selectTime)
        return () => {
            clearInterval(interval);
        }
    }, [selectTime]);

    return (
        <div className="App">
            <Context.Provider value={{
                selectTime,
                earthquakes,
                setSelectTime
            }}>
                {props.children}
            </Context.Provider>

        </div>
    );
}

export default App;
