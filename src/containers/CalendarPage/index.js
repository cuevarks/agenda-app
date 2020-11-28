import React from "react";
import moment from "moment";
import WeekDays from "../../components/WeekDays";
import MonthDays from "../../components/MonthDays";
import "../../scss/main.scss";

export default function CalendarPage() {
  const thisMonth = moment.months(moment().month());
  console.log(moment("2020-01").startOf("month").format("d"));

  return (
    <>
      <h1>{thisMonth}</h1>
      <fragment className="calendar-layout">
        <WeekDays />
        <MonthDays />
      </fragment>
    </>
  );
}
