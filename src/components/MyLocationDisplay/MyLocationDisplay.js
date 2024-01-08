import { isEmpty } from "../../utils/helpers/helpers";

const MyLocationDisplay = ({ location, currentWeather, tempHi, tempLow }) => {
  return (
    // <div className="border border-white flex flex-col items-center mr-auto ml-auto w-1/2">
      <div className="border border-white mx-auto py-4 flex flex-col items-center w-1/3">
        <h1 className="text-2xl">My Location</h1>
        <h1 className="mb-3 text-md">
          {!isEmpty(location) ? location?.name : "Search for your city"}
        </h1>
        <h1 className="text-5xl">{Math.round(currentWeather?.temp) + "°"}</h1>
        <h1>{currentWeather?.weather[0]?.main}</h1>
        <div className="flex gap-2">
          <p>{`H: ${Math.round(tempHi)}°`}</p>
          <p>{`L: ${Math.round(tempLow)}°`}</p>
        </div>
      </div>
    // </div>
  );
};

export default MyLocationDisplay;
