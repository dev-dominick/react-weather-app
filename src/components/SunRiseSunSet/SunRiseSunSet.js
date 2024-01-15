import { convertDateToCurrentHour } from "../../utils/helpers/helpers";

const SunRiseSunSet = ({ sunRise, sunSet }) => {
  return (
    <div className="border p-5 w-1/4 flex justify-around">
      <div className="flex flex-col items-center gap-2">
        <p>Sun Rise:</p>
        <p>{convertDateToCurrentHour(sunRise)}</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p>Sun Set:</p>
        <p>{convertDateToCurrentHour(sunSet)}</p>
      </div>
    </div>
  );
};

export default SunRiseSunSet;
