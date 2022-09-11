import {GeoMarker, Range, Time} from "../model";

export const timeOptions: Time[] = [
    {value: 0, label: 'No refreshing'},
    {value: 1000, label: '1 second'},
    {value: 2000, label: '2 seconds'},
    {value: 60000, label: '1 minute'},
    {value: 120000, label: '2 minutes'},
    {value: 300000, label: '5 minutes'},
    {value: 900000, label: '15 minutes'},
]

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

export const initialRange: Range = {
    min: 0,
    max: 5
}

export const initialMarker: GeoMarker = {
    lat: 0,
    lng: 0
}

export const centerMap = {
    lat: 65.005,
    lng: -18.677
};
