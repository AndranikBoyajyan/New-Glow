import { instance } from "../../../../service/axiosInstance";

export const getMenuItems = async () => {
  const response = await instance(`api/menu-items?activeId=2`);

  return response.data;
};
