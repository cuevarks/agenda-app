import { NEXT_MONTH, PREV_MONTH, PREV_YEAR, NEXT_YEAR } from "./types";

export const nextMonth = (year) => ({
  type: NEXT_MONTH,
  payload: year,
});

export const prevMonth = (year) => ({
  type: PREV_MONTH,
  payload: year,
});

export const prevYear = (year) => ({
  type: PREV_YEAR,
  payload: year,
});
export const nextYear = (year) => ({
  type: NEXT_YEAR,
  payload: year,
});
