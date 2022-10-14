import '../styles/fetchWeather.css'

const REACT_APP_API = process.env.REACT_APP_API
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

function getInput() {
    let userInput = document.querySelector('#cityInput').value.toLowerCase().trim();
    console.log(userInput);
    if (userInput) {
        return userInput
    } else if (userInput === '') {
        alert('please enter a valid city name');
    } else {
        return '';
    }
};

function buildGeoApi(userInput) {
    return `${REACT_APP_API}/geo/1.0/direct?q=${userInput}&limit=5&appid=${REACT_APP_API_KEY}`;
};

function buildWeatherAPI(coords) {
    return `${REACT_APP_API}/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=imperial&exclude=minutely&appid=${REACT_APP_API_KEY}`;

};

async function getCoordinates(geoApi) {
    const response = await fetch(geoApi);
    const geoCoords = await response.json();
    let coords = geoCoords[0]
    console.log(coords);
    return coords
};

async function getWeatherData(weatherApi) {
    const response = await fetch(weatherApi);
    const weather = await response.json();
    console.log(weather);
    return weather;
}

export {
    getInput,
    buildGeoApi,
    buildWeatherAPI,
    getCoordinates,
    getWeatherData
}

