import { months, days } from "../../utils/constants/constants";

const currentDate = new Date();

export const date = `${days[currentDate.getDay()]}, ${
  months[currentDate.getMonth()]
} ${currentDate.getDate()} `;

export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const getMaxTemp = (data) => {
  return data ? data[0]?.temp?.max : null;
};

export const getMinTemp = (data) => {
  return data ? data[0]?.temp?.min : null;
};

export const convertDateToCurrentHour = (unixTime) => {
  const myDate = new Date(unixTime * 1000);
  const getHour = myDate.getHours();

  const normalizeHours =
    getHour > 12
      ? myDate.getHours() - 12 + "pm"
      : myDate.getHours() === 0
      ? "12am"
      : myDate.getHours() + "am";
  return normalizeHours;
};

export const convertDateToDay = (unixTime) => {
  const todaysDate = new Date();
  const myDate = new Date(unixTime * 1000);
  const getDayOfWeek = myDate.getDay();

  const returnToday = getDayOfWeek === todaysDate.getDay();

  if (returnToday) {
    return "Today";
  } else {
    switch (getDayOfWeek) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";

      default:
        break;
    }
  }
};
