import moment from "moment";

const getPreviousMonthDays = (initialCalendarDay, lastMonthDay) => {
  const totalPreviousMonthDays = [];

  for (
    let calendarDay = initialCalendarDay;
    calendarDay <= lastMonthDay;
    calendarDay++
  ) {
    totalPreviousMonthDays.push(calendarDay);
  }

  return totalPreviousMonthDays;
};

const previewNextMonth = (daysInMonth) => {
  const totalCalendarSpace = 49;
  const leftSpaces = totalCalendarSpace - daysInMonth.length;
  const firstNextMonthDays = [];

  if (leftSpaces > 0) {
    for (let prevNextMonth = 1; prevNextMonth <= leftSpaces; prevNextMonth++) {
      firstNextMonthDays.push(prevNextMonth);
    }
  }

  return firstNextMonthDays;
};

export const daysInCurrentView = (
  previousMonthDay,
  year,
  monthIndex,
  daysInMonth
) => {
  const startOfMonth = getStartOfMonth(year, monthIndex + 1);
  const initialCalendarDay = previousMonthDay - startOfMonth + 1;
  const totalPreviousMonthDays = getPreviousMonthDays(
    initialCalendarDay,
    previousMonthDay
  );

  daysInMonth.unshift(...totalPreviousMonthDays);
  const firstNextMonthDays = previewNextMonth(daysInMonth);

  daysInMonth.push(...firstNextMonthDays);
};

const getStartOfMonth = (year, monthIndex) => {
  const date =
    monthIndex >= 10 ? `${year}-${monthIndex}` : `${year}-0${monthIndex}`;
  return moment(date).startOf("month").format("d");
};

export const totalMonthDays = (year, monthIndex) => {
  let date = `${year}-${monthIndex}`;

  if (monthIndex === 0) {
    date = `${year - 1}-${12}`;
  }

  return moment(date, "YYYY-MM").daysInMonth();
};
