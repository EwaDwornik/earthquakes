import {GeoMarker, Range, Time} from "../model";

//refreshing time select bar
export const timeOptions: Time[] = [
    {value: 0, label: 'No refreshing'},
    {value: 1000, label: '1 second'},
    {value: 2000, label: '2 seconds'},
    {value: 60000, label: '1 minute'},
    {value: 120000, label: '2 minutes'},
    {value: 300000, label: '5 minutes'},
    {value: 900000, label: '15 minutes'},
]

//readable dates format for table
export const formatDate = (dateString: string) => {
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

//initial state for setting up the range of magnitude, needed for searching the table.
export const initialRange: Range = {
    min: 0,
    max: 5
}

//initial state for maps markers
export const initialMarker: GeoMarker = {
    lat: 0,
    lng: 0
}

//center a map to show Iceland
export const centerMap = {
    lat: 65.005,
    lng: -18.677
};

//set up size of a map with one marker
export const containerStyleOneMarker = {
    width: '350px',
    height: '200px'
};

//set up size of a map with all markers
export const containerStyleAllMarkers = {
    width: '500px',
    height: '370px'
};