import React from "react";
import moment from "moment";
import "../../scss/main.scss";

const weekDays = () => {
  const weekDays = moment.weekdaysShort();
  return weekDays;
};

export default function WeekDays() {
  return (
    <fragment className="weekdays-names-layout">
      {weekDays().map((weekDay) => (
        <h2>{weekDay}</h2>
      ))}
    </fragment>
  );
}
