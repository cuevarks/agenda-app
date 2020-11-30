import { post } from "axios";
import { APP_BASE_URL } from "./constant";

export const createEvent = async (newEvent) => {
  const request = `${APP_BASE_URL}/`;

  try {
    const result = await post(
      request,
      {
        ...newEvent,
      },
      {
        headers: { Accept: "application/json" },
      }
    );
    return result;
  } catch (e) {
    return e.response;
  }
};
