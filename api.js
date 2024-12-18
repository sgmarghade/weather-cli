import axios from 'axios';
const API_KEY= process.env.API_KEY;
if (!API_KEY) {
    throw new Error('API KEY MISSING');
}
const apiInstance = axios.create({
    baseURL: 'http://api.openweathermap.org',
    timeout: 10000
});

export async function getLatLongForCity(cityName) {
    const latLongResult = await apiInstance.get('/geo/1.0/direct', {
        params: {
            q: cityName,
            limit: 1,
            appid: API_KEY
        }
    });

    return latLongResult.data[0];
}

export async function getWeatherDataForLatLong(lat,lon) {

    const weatherResult = await apiInstance.get('/data/2.5/weather', {
        params: {
            lat,
            lon,
            appid: API_KEY
        }
    });

    return weatherResult.data;
}