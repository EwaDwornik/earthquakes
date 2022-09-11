import React, {useContext} from 'react';
import '../style/style.css';
import {Context} from "../context/context";
import {timeOptions} from "../services/utilities";


function Navigation() {
    const {selectTime, setSelectTime} = useContext(Context)

    function handleChange(event: any): void {
        setSelectTime?.(event.target.value);
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Earthquakes</a>
                <div className="navbar-collapse" >
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/visuals">Visuals</a>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <div className="m-2">
                            Data will refresh in every
                        </div>
                        <select
                            className="m-2"
                            value={selectTime}
                            onChange={handleChange}>
                            {timeOptions.map((option, i) => (
                                <option key={i} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </nav>
);
}

export default Navigation;

