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


    // const currentData = inputsWeather.current;
    // const hourlyData = inputsWeather.hourly;
    // const weeklyData = inputsWeather.daily;

    // const sunset = new Date(currentData.sunset * 1000).toLocaleTimeString(
    //   "en-US",
    //   HH_MM
    // );
    // const sunrise = new Date(currentData.sunrise * 1000).toLocaleTimeString(
    //   "en-US",
    //   HH_MM
    // );

    // const current = {
    //   city: userInputAndCoords.name,
    //   state: userInputAndCoords.state,
    //   country: userInputAndCoords.country,
    //   temperature: currentData.temp,
    //   realFeel: currentData.feels_like,
    //   main: currentData.weather[0].main,
    //   weatherDescription: currentData.weather[0].description,
    //   icon: currentData.weather[0].icon,
    //   sunrise,
    //   sunset,
    // };

    // const hourlyWeather = hourlyData.map((data, index) => {
    //   const dateHourlyInfo = new Date(data.dt * 1000).toLocaleTimeString(
    //     "en-US",
    //     HH
    //   );
    //   return {
    //     key: index,
    //     dateHourlyInfo,
    //     temperature: data.temp,
    //     realFeel: data.feels_like,
    //     main: data.weather[0].main,
    //     description: data.weather[0].description,
    //     icon: data.weather[0].icon,
    //   };
    // });

    // // console.log(hourlyWeather);

    // const weeklyWeather = weeklyData.map((data, index) => {
    //   const dateWeekInfo = new Date(data.dt * 1000);
    //   const dateWeekDay = `${days[dateWeekInfo.getDay()]}, ${
    //     months[dateWeekInfo.getMonth()]
    //   } ${dateWeekInfo.getDate()} `;
    //   return {
    //     key: index,
    //     dateWeekDay,
    //     highTemp: data.temp.max,
    //     lowTemp: data.temp.min,
    //     main: data.weather[0].main,
    //     description: data.weather[0].description,
    //     icon: data.weather[0].icon,
    //   };
    // });

    // console.log(weeklyWeather);

    // setState({
    //   ...state,
    //   current,
    //   hourlyWeather,
    //   weeklyWeather,
    //   loading: false,
    //   error: false,
    // });
    // setTab("Current Forecast");
  } catch (error) {
      console.log(error);
  }
};
