const REACT_APP_API = process.env.REACT_APP_API
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY



function buildGeoApi(userInput) {
    console.log('building geo api from input');
    return `${REACT_APP_API}/geo/1.0/direct?q=${userInput}&limit=5&appid=${REACT_APP_API_KEY}`;

};

async function getCoordinates(geoApi) {
    console.log('waiting for coords response');
    const response = await fetch(geoApi);
    const geoCoords = await response.json();
    let coords = geoCoords[0]
    return coords
};

function buildWeatherAPI(coords) {
    console.log('building weather api with coords');
    return `${REACT_APP_API}/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=imperial&exclude=minutely&appid=${REACT_APP_API_KEY}`;

};

async function getWeatherData(weatherApi) {
    console.log('waiting for weather respsonse');
    const response = await fetch(weatherApi);
    const weather = await response.json();
    console.log(weather);
    return weather;
};


export {
    buildGeoApi,
    buildWeatherAPI,
    getCoordinates,
    getWeatherData
};

