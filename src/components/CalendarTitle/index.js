import React from "react";
import { connect } from "react-redux";
import { Icon, IconButton } from "@material-ui/core";
import dispatches from "./dispatches";

const CalendarTitle = ({
  currentMonth,
  nextMonth,
  prevMonth,
  nextYear,
  prevYear,
}) => {
  return (
    <div className="calendar-title">
      <h1>{`${currentMonth.name} ${currentMonth.year}`}</h1>
      <div>
        <h3>Year</h3>
        <div>
          <IconButton onClick={() => prevYear(currentMonth.year)}>
            <Icon>navigate_before</Icon>
          </IconButton>
          <IconButton onClick={() => nextYear(currentMonth.year)}>
            <Icon>navigate_next</Icon>
          </IconButton>
        </div>
      </div>
      <div>
        <h3>Month</h3>
        <div>
          <IconButton onClick={() => prevMonth(currentMonth.year)}>
            <Icon>navigate_before</Icon>
          </IconButton>
          <IconButton onClick={() => nextMonth(currentMonth.year)}>
            <Icon>navigate_next</Icon>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentMonth: state.currentDate.currentMonth,
});

const mapDispatchToProps = (dispatch) => dispatches(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CalendarTitle);
