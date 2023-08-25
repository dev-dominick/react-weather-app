const REACT_APP_API = process.env.REACT_APP_API;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const buildGeoApi = (userInput) => {
  return `${REACT_APP_API}/geo/1.0/direct?q=${userInput}&limit=5&appid=${REACT_APP_API_KEY}`;
};

export const getCoordinates = async (geoApi) => {
  try {
    const response = await fetch(geoApi);
    const geoCoords = await response.json();
    let coords = geoCoords[0];
    return coords;
  } catch (error) {
    console.error(error);
  }
};

export const buildWeatherAPI = (coords) => {
  return `${REACT_APP_API}/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=imperial&exclude=minutely&appid=${REACT_APP_API_KEY}`;
};

export const getWeatherData = async (weatherApi) => {
  const response = await fetch(weatherApi);
  const weather = await response.json();
  return weather;
};
