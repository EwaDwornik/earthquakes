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
