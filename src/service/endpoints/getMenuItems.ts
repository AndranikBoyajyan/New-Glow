import { api } from "../axiosInstance";

export const getMenuItems = async () => {
  const response = await api.get(`menu-items?activeId=2`);

  return response.data;
};
