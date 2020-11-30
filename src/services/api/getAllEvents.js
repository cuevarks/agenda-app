import { get } from "axios";
import { APP_BASE_URL } from "./constant";

export const getAllEvents = async (id) => {
  try {
    const { data } = await get(`${APP_BASE_URL}/`, {});
    return data;
  } catch (e) {
    return [];
  }
};
