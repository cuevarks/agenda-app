import axios from "axios";
import { APP_BASE_URL } from "./constant";

export const deleteEvent = async (id) => {
  try {
    const result = await axios.delete(`${APP_BASE_URL}/${id}`, {});
    return result;
  } catch (e) {
    return e.response;
  }
};
