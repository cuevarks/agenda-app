import React from "react";
import moment from "moment";
import "../../scss/main.scss";

const weekDays = () => {
  const weekDays = moment.weekdaysShort();
  return weekDays;
};

export default function WeekDays() {
  return (
    <>
      {weekDays().map((weekDay) => (
        <p>{weekDay}</p>
      ))}
    </>
  );
}
