import { nextMonth, prevMonth, nextYear, prevYear } from "../../stores/actions";

export default function dispatches(dispatch) {
  return {
    nextMonth(year) {
      dispatch(nextMonth(year));
    },
    prevMonth(year) {
      dispatch(prevMonth(year));
    },
    nextYear(year) {
      dispatch(nextYear(year));
    },
    prevYear(year) {
      dispatch(prevYear(year));
    },
  };
}
