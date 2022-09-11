import {Time} from "../model";

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
