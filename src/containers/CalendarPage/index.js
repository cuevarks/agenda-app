import React from "react";
import { Paper } from "@material-ui/core";
import WeekDays from "../../components/WeekDays";
import MonthDays from "../../components/MonthDays";
import CalendarTitle from "../../components/CalendarTitle";
import "../../scss/main.scss";

const CalendarPage = () => {
  return (
    <fragment className="container">
      <Paper>
        <CalendarTitle />
        <WeekDays />
        <MonthDays />
      </Paper>
    </fragment>
  );
};

export default CalendarPage;
