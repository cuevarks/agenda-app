import moment from "moment";
import { PREV_MONTH, NEXT_MONTH, PREV_YEAR, NEXT_YEAR } from "../actions/types";
import { initialStore } from "../constant";

const sanitizeValue = (value, updateType) => {
  if (updateType === NEXT_MONTH) {
    return value + 1;
  }
  return value - 1;
};

const changeYear = (year, updateType) => {
  if (updateType === NEXT_MONTH) {
    return year + 1;
  }
  return year - 1;
};

const monthDays = (year, monthIndex) => {
  const format = "YYYY-MM";
  return moment(`${year}-${monthIndex}`, format).daysInMonth();
};

const newYear = (year, currentData, type) => {
  const { name, index } = currentData;
  let updatedYear = year - 1;

  if (type === NEXT_YEAR) {
    updatedYear = year + 1;
  }

  const days = monthDays(updatedYear, index);
  return { name, index, days, year: updatedYear };
};

const newMonth = (year, monthIndex, updateType) => {
  const previousYear = monthIndex === 0 && updateType === PREV_MONTH;
  const nextYear = monthIndex === 11 && updateType === NEXT_MONTH;

  if (previousYear || nextYear) {
    monthIndex = previousYear ? 10 : -1;
    year = changeYear(year, updateType);
  }

  const index = sanitizeValue(monthIndex, updateType);
  const name = moment.months(index);
  const days = monthDays(year, sanitizeValue(index, updateType));

  return { name, index, days, year };
};

export default function currentDate(state = initialStore, { payload, type }) {
  switch (type) {
    case PREV_MONTH:
      return {
        ...state,
        currentMonth: newMonth(payload, state.currentMonth.index, type),
      };
    case NEXT_MONTH:
      return {
        ...state,
        currentMonth: newMonth(payload, state.currentMonth.index, type),
      };
    case PREV_YEAR:
      return {
        ...state,
        currentMonth: newYear(payload, state.currentMonth, type),
      };
    case NEXT_YEAR:
      return {
        ...state,
        currentMonth: newYear(payload, state.currentMonth, type),
      };
    default:
      return state;
  }
}
