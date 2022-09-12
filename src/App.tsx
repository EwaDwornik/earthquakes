import React, {useEffect, useState} from 'react';
import './App.css';
import {Earthquake} from "./model";
import {Context} from "./context/context";

//parent page, here we share data with all children
export function App (props: any) {
    //two states needed to fetch API and to set up re-fetching time
    const [earthquakes, setEarthquakes] = useState<Earthquake[]>([]);
    const [selectTime, setSelectTime] = useState<number>(0);

    //fetching data from API
    const getData = async () => {
        const url = "https://apis.is/earthquake/is ";
        const response = await fetch(url);
        const data = await response.json();
        setEarthquakes(data.results)
    }

    //first fetching before setting up re-fetching frequency
    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        //skip periodic re-fetching when not chosen
        if (!selectTime) {
            return;
        }

        //setting up re-fetching interval
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
                {/* sharing data with all children */}
                {props.children}
            </Context.Provider>

        </div>
    );
}

export default App;
