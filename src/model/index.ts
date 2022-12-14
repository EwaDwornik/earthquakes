export interface Earthquake {
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
    setSelectTime?: (value: number) => void,
}

export interface GeoMarker {
    lat: number,
    lng: number
}

export interface Time {
    value: number,
    label: string,
}

export interface NumberOfEarthquakes {
    name: string,
    events: number,
}

export interface SizeDepthQuality {
    size: number,
    depth: number,
    quality: number,
}

export interface Range {
    min: number,
    max: number
}