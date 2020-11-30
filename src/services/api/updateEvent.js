import { put } from "axios";
import { APP_BASE_URL } from "./constant";

export const updateEvent = async (id, data) => {
  try {
    const result = await put(`${APP_BASE_URL}/${id}`, {
      ...data,
    });
    return result;
  } catch (e) {
    return e.response;
  }
};
