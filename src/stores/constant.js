import moment from "moment";

export const initialStore = {
  currentMonth: {
    name: moment.months(moment().month()),
    index: moment().month(),
    days: moment(
      `${moment().year()}-${moment().month() + 1}`,
      "YYYY-MM"
    ).daysInMonth(),
    year: moment().year(),
  },
};
