import { isEmpty } from "../../utils/helpers/helpers";

const MyLocationDisplay = ({ location, currentWeather, tempHi, tempLow }) => {
  return (
    <div className="mx-auto flex flex-col items-center w-1/3">
      <h1 className="mb-2 text-2xl">{location ? "My Location" : null}</h1>

      <h1 className="mb-3 text-md">
        {!isEmpty(location) ? location?.name : "Search for your city"}
      </h1>

      <h1 className="text-5xl">
        {currentWeather ? Math.round(currentWeather?.temp) + "°" : null}
      </h1>

      <h1>{currentWeather ? currentWeather?.weather[0]?.main : null}</h1>

      {tempHi && tempLow ? (
        <div className="flex gap-2">
          <p>{tempHi ? `H: ${Math.round(tempHi)}°` : null}</p>
          <p>{tempLow ? `L: ${Math.round(tempLow)}°` : null}</p>
        </div>
      ) : null}
    </div>
  );
};

export default MyLocationDisplay;
