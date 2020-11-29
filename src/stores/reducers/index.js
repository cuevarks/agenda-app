import { combineReducers } from "redux";
import currentDateReducer from "./currentDateReducer";

export default combineReducers({
  currentDate: currentDateReducer,
});
