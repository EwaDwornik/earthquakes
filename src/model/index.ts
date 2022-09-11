export interface Earthquake {
    id: number,
    timestamp: string,
    latitude: number,
    longitude: number,
    depth: number,
    size: number,
    quality: number,
    humanReadableLocation: string,
}

export interface EarthquakesContextType {
    earthquakes: Earthquake[],
    selectTime: number,
    setSelectTime?:  (value: number) => void,
}

export interface Time {
    value: number,
    label: string,
}

export interface ChartNumberOfEarthquakes {
    name: string,
    events: number,
}
