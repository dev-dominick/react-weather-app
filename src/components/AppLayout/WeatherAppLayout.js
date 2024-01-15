import { useWeatherStore } from "../../store/WeatherStore";
import { useLocationStore } from "../../store/LocationStore";
import { getMaxTemp, getMinTemp } from "../../utils/helpers/helpers";
import MyLocationDisplay from "../MyLocationDisplay/MyLocationDisplay";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
import TenDayForeCast from "../TenDayForeCast/TenDayForeCast";
import AppIntro from "../AppIntro/AppIntro";

const WeatherAppLayout = () => {
  // weather state
  const weather = useWeatherStore((state) => state.weather);
  const location = useLocationStore((state) => state.location);

  return (
    <div className="flex flex-col flex-wrap content-center min-w-full min-h-screen">
      <div className="md:w-2/3">
        {!weather ? (
          <AppIntro />
        ) : (
          <>
            <MyLocationDisplay
              location={location}
              currentWeather={weather?.current}
              tempHi={getMaxTemp(weather?.daily)}
              tempLow={getMinTemp(weather?.daily)}
            />
            <HourlyWeather hourly={weather?.hourly ?? "no value found"} />
            <TenDayForeCast daily={weather?.daily} />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherAppLayout;
