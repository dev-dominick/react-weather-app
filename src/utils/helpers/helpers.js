import { months, days } from "../../utils/constants/constants";

const currentDate = new Date();

export const date = `${days[currentDate.getDay()]}, ${
  months[currentDate.getMonth()]
} ${currentDate.getDate()} `;
