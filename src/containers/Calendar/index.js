import React from "react";
import CalendarPage from "../CalendarPage";
import { Provider } from "react-redux";
import store from "../../stores/store";

export default function Calendar() {
  return (
    <Provider store={store}>
      <CalendarPage />
    </Provider>
  );
}
