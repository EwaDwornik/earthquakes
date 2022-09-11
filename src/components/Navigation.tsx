import React, {useContext} from 'react';
import '../style/style.css';
import {Context} from "../context/context";
import {timeOptions} from "../services/utilities";


function Navigation() {
    const {selectTime, setSelectTime} = useContext(Context)

    function handleChange(event: any): void {
        setSelectTime?.(event.target.value);
    }

    // const handleChange: ChangeEventHandler<HTMLSelectElement> = (e): void => {
    //   const value = e.target.value
    //  setSelectTime?.(+value);
    //}

    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light navbar-custom">
            <a className="navbar-brand" href="/">Earthquakes</a>
            <a className="navbar-brand" href="/visuals">Visuals</a>
            <div className="selectTime">
                Data will refresh in every
                <select
                    value={selectTime}
                    onChange={handleChange}>
                    {timeOptions.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
        </nav>
    );
}

export default Navigation;

