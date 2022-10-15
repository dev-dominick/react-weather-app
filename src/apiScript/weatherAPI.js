const REACT_APP_API = process.env.REACT_APP_API
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY



function buildGeoApi(userInput) {

    console.log('building geo api');

    return `${REACT_APP_API}/geo/1.0/direct?q=${userInput}&limit=5&appid=${REACT_APP_API_KEY}`;

};

async function getCoordinates(geoApi) {
    console.log('wiating for coords');
    const response = await fetch(geoApi);
    console.log('waiting for api call');
    const geoCoords = await response.json();
    let coords = geoCoords[0]
    console.log(coords);
    return coords
};

function buildWeatherAPI(coords) {
    return `${REACT_APP_API}/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=imperial&exclude=minutely&appid=${REACT_APP_API_KEY}`;

};

async function getWeatherData(weatherApi) {
    const response = await fetch(weatherApi);
    const weather = await response.json();
    console.log(weather);
    return weather;
}

// async function showMeTheWeather(userInput) {
//     const gettingCoords = buildGeoApi(userInput);
//     const coords = await getCoordinates(gettingCoords);
//     const gettingWeather = buildWeatherAPI(coords);
//     const weather = await getWeatherData(gettingWeather);
//     console.log(weather);
//     return weather
// }

export {
    // getInput,
    buildGeoApi,
    buildWeatherAPI,
    getCoordinates,
    getWeatherData
    // showMeTheWeather
}

