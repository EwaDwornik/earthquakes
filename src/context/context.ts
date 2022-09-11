import {createContext} from "react";
import {EarthquakesContextType} from "../model";


export const Context = createContext<EarthquakesContextType>({
    selectTime: 0,
    earthquakes: [],
    setSelectTime: () => {},
})

