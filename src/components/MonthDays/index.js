import React, { useState } from "react";
import { connect } from "react-redux";
import CreateEventModal from "../CreateEventModal";
import { daysInCurrentView, totalMonthDays } from "./helpers";

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
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(true);
  };

  return (
    <fragment className="days-layout">
      {monthDays(currentMonth, currentMonth.year).map((day) => (
        <div className="month-day" onClick={handleModal}>
          {day.day ? <p className={day.class}>{day}</p> : <p>{day}</p>}
        </div>
      ))}
      <CreateEventModal
        modalOpen={modalOpen}
        handleClose={() => setModalOpen(false)}
      />
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  currentMonth: state.currentDate.currentMonth,
});

export default connect(mapStateToProps, {})(MonthDays);
