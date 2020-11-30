import {
  NEXT_MONTH,
  PREV_MONTH,
  PREV_YEAR,
  NEXT_YEAR,
  GET_EVENT,
  GET_ALL_EVENTS,
  CREATE_EVENT,
  DELETE_EVENT,
  UPDATE_EVENT,
} from "./types";
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  getEvent,
  updateEvent,
} from "../../services/api/";

export const nextMonth = (year) => ({
  type: NEXT_MONTH,
  payload: year,
});

export const prevMonth = (year) => ({
  type: PREV_MONTH,
  payload: year,
});

export const prevYear = (year) => ({
  type: PREV_YEAR,
  payload: year,
});

export const nextYear = (year) => ({
  type: NEXT_YEAR,
  payload: year,
});

export const fetchEvent = (id) => async (dispatch) => {
  const res = await getEvent(id);

  dispatch({
    type: GET_EVENT,
    payload: res.data,
  });
};

export const fetchEvents = () => async (dispatch) => {
  const res = await getAllEvents();

  dispatch({
    type: GET_ALL_EVENTS,
    payload: res.data,
  });
};

export const newEvent = (data) => async (dispatch) => {
  const res = await createEvent(data);

  dispatch({
    type: CREATE_EVENT,
    payload: res.data,
  });
};

export const eraseEvent = (id) => async (dispatch) => {
  const res = await deleteEvent(id);

  dispatch({
    type: DELETE_EVENT,
    payload: res.data,
  });
};

export const editEvent = (id, data) => async (dispatch) => {
  const res = await updateEvent(data);

  dispatch({
    type: UPDATE_EVENT,
    payload: res.data,
  });
};
