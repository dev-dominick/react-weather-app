import { useState } from "react";

import { useWeatherStore } from "../../store/WeatherStore";
import { useLocationStore } from "../../store/LocationStore";
import { isEmpty, getMaxTemp, getMinTemp } from "../../utils/helpers/helpers";
import DisplayOptions from "../DisplayOptions/DisplayOptions";
import MyLocationDisplay from "../MyLocationDisplay/MyLocationDisplay";

const WeatherAppLayout = () => {
  // weather state
  const weather = useWeatherStore((state) => state.weather);
  console.log("weather", weather);

  const { current, daily, hourly } = weather
  console.log("daily", getMaxTemp(daily));


  const location = useLocationStore((state) => state.location);
  console.log("location", !isEmpty(location));

  return (
    <div className="flex flex-col flex-wrap content-center">
      <div className="mb-10">
        <MyLocationDisplay
          location={location}
          currentWeather={current}
          tempHi={getMaxTemp(daily)}
          tempLow={getMinTemp(daily)}
        />
      </div>
      <DisplayOptions />
    </div>
  );
};

export default WeatherAppLayout;
