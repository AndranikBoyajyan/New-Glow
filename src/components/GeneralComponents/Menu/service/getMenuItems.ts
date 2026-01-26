import axios from "axios";

const BASE_URL = import.meta.env.VITE_SERVER_API;

export const getMenuItems = async () => {
  const response = await axios(`${BASE_URL}api/menu-items?activeId=2`);

  return response.data;
};
