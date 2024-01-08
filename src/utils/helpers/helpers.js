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
  return data[0]?.temp?.max
}

export const getMinTemp = (data) => {
  return data[0]?.temp?.min;

};
