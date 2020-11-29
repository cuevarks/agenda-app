import React, { useState } from "react";
import moment from "moment";
import { connect } from "react-redux";

const daysInCurrentView = (previousMonthDay, year, monthIndex, daysInMonth) => {
  const startOfMonth = getStartOfMonth(year, monthIndex + 1);
  const initialCalendarDay = previousMonthDay - startOfMonth + 1;
  const totalPreviousMonthDays = [];

  for (
    let calendarDay = initialCalendarDay;
    calendarDay <= previousMonthDay;
    calendarDay++
  ) {
    totalPreviousMonthDays.push(calendarDay);
  }

  daysInMonth.unshift(...totalPreviousMonthDays);

  const leftSpaces = 35 - daysInMonth.length;
  const firstNextMonthDays = [];

  if (leftSpaces > 0) {
    for (let prevNextMonth = 1; prevNextMonth <= leftSpaces; prevNextMonth++) {
      firstNextMonthDays.push(prevNextMonth);
    }
  }

  daysInMonth.push(...firstNextMonthDays);
};

const getStartOfMonth = (year, monthIndex) => {
  const date =
    monthIndex >= 10 ? `${year}-${monthIndex}` : `${year}-0${monthIndex}`;
  return moment(date).startOf("month").format("d");
};

const totalMonthDays = (year, monthIndex) => {
  return moment(`${year}-${monthIndex}`, "YYYY-MM").daysInMonth();
};

const monthDays = (monthInfo, year) => {
  const { days, index } = monthInfo;
  const daysInMonth = [];
  const previousMonthDay = totalMonthDays(year, index);

  for (let day = 1; day <= days; day++) {
    daysInMonth.push(day);
  }

  daysInCurrentView(previousMonthDay, year, index, daysInMonth);
  return daysInMonth;
};

const MonthDays = ({ currentMonth }) => {
  const [createEventOpen, setCreateEventOpen] = useState(false);

  return (
    <fragment className="days-layout">
      {monthDays(currentMonth, currentMonth.year).map((day) => (
        <div className="month-day">
          <p>{day}</p>
        </div>
      ))}
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  currentMonth: state.currentDate.currentMonth,
});

export default connect(mapStateToProps, {})(MonthDays);
