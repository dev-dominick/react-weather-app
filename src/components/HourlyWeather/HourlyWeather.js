import React from "react";
import {
  convertDateToCurrentHour,
} from "../../utils/helpers/helpers";
import IconsByCondition from "../IconsByCondition/IconsByCondition";
import DisplayModal from "../Modal/Modal";

const HourlyWeather = ({ hourly }) => {
  return (
    <div className="w-full mx-auto" onClick={() => <DisplayModal />}>
      <div className="mt-5 h-full border border-white br-3 rounded-md">
        <p className="ml-4 my-2">Hourly Forecast</p>
        <hr />
        <div className="h-full p-0 lg:p-2 flex gap-2 md:gap-0 md:justify-around flex-wrap">
          {hourly &&
            hourly?.slice(0, 10).map((temp, index) => (
              <div key={index} className="flex flex-col items-center gap-1">
                <p className="text-sm">{convertDateToCurrentHour(temp?.dt)}</p>
                {temp?.weather?.map((icon) => (
                  <IconsByCondition key={index} icon={icon.main} />
                ))}
                <p className="text-sm">{Math.round(temp?.temp) + "°"}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyWeather;
