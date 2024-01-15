const REACT_APP_API = process.env.REACT_APP_API;
const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

export const getCoordinates = async (userInput) => {
  console.log("user input", userInput);
  try {
    const response = await fetch(
      `${REACT_APP_API}/geo/1.0/direct?q=${userInput}&limit=5&appid=${REACT_APP_API_KEY}`
    );
    const geoCoords = await response.json();
    return geoCoords[0];
  } catch (error) {
    console.error(error);
  }
};

export const showMeTheWeather = async (data) => {
  try {
    const response = await fetch(
      `${REACT_APP_API}/data/2.5/onecall?lat=${data.lat}&lon=${data.lon}&units=imperial&exclude=minutely&appid=${REACT_APP_API_KEY}`
    );
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.log(error);
  }
};
