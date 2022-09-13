import React, {useContext} from 'react';
import '../style/style.css';
import {Context} from "../context/context";
import {timeOptions} from "../services/utilities";

//Navigation bar with selecting re-fetching options
function Navigation() {
    const {selectTime, setSelectTime} = useContext(Context)

    //setting re-fetching option
    function handleChange(event: any): void {
        setSelectTime?.(event.target.value);
    }

    return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light navbar-custom">
            <div className="navbar-collapse collapse w-100 order-md-0 ">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">earthquakes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/visuals">visuals</a>
                    </li>
                </ul>
            </div>

            <div className="mx-auto order-0 navbar-middle">
                <h3>Earthquakes in Iceland </h3>
            </div>

            {/* selecting re-fetching option */}
            <div className="collapse navbar-collapse w-100 order-3 dual-collapse2 " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <p className="m-2">
                            data will refresh every
                        </p>
                    </li>
                    <li className="nav-item">
                        <select
                            className="m-2 form-select form-select-sm"
                            value={selectTime}
                            onChange={handleChange}>
                            {timeOptions.map((option, i) => (
                                <option key={i} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navigation;

