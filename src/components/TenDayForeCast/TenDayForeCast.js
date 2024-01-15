import React from "react";
import { convertDateToDay } from "../../utils/helpers/helpers";
import IconsByCondition from "../IconsByCondition/IconsByCondition";

const TenDayForeCast = ({ daily }) => {
  return (
    <div className=" mt-6 w-full mx-auto">
      <div className=" w-full mx-auto mt-0 h-full border border-white br-3 rounded-md">
        <p className="ml-4 my-2">10-day Forecast</p>
        <hr />
        <div className="flex flex-col">
          {daily
            ? daily.map((day, index) => (
                <>
                  <div key={index} className="flex py-3">
                    <div className="w-1/5">{convertDateToDay(day?.dt)}</div>
                    <div className="mr-6">
                      <IconsByCondition icon={day?.weather[0].main} />
                    </div>
                    <div className="flex gap-4">
                      <p>H: {Math.round(day.temp.max) + "°"}</p>
                      <p>L: {Math.round(day.temp.min) + "°"}</p>
                    </div>
                  </div>
                  <hr />
                </>
              ))
            : null}
        </div>
      </div>{" "}
    </div>
  );
};

export default TenDayForeCast;
