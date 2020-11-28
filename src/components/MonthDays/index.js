import React from "react";
import moment from "moment";

const monthDays = () => {
  const totalCalendarSpace = 35;
  const [daysInMonth, totalDaysInMonth] = [[], moment().daysInMonth()];

  for (let day = 1; day <= totalDaysInMonth; day++) {
    daysInMonth.push(day);
  }

  const remainingCalendarSpace = totalCalendarSpace - daysInMonth.length;
  const nextMonthPrev = Array.from(
    new Array(remainingCalendarSpace),
    (val, index) => index + 1
  );

  return daysInMonth.concat(nextMonthPrev);
};

export default function MonthDays() {
  return (
    <>
      {monthDays().map((day) => (
        <p>{day}</p>
      ))}
    </>
  );
}
