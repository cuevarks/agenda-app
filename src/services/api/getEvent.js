import { get } from "axios";
import { APP_BASE_URL } from "./constant";

export const getEvent = async (id) => {
  try {
    const { data } = await get(`${APP_BASE_URL}/${id}`, {});
    return { ...data };
  } catch (e) {
    return;
  }
};
