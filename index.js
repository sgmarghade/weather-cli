import figlet from 'figlet';
import inquirer from 'inquirer';
import {getLatLongForCity, getWeatherDataForLatLong} from './api.js';

//Print greeting message.
await figlet('WEATHER  AT  COMMAND', function (err, data) {
    console.log(data)
});

//Take city name as input, alternate to yargs
const { cityName } = await inquirer.prompt({
    type: "input",
    name: "cityName",
    message: "Enter Your City Name?"
});

const {lat, lon} = await getLatLongForCity(cityName);
if (!lat) {
    throw new Error('Error: City not found');
}

const weatherData = await getWeatherDataForLatLong(lat, lon);

console.log(weatherData);
