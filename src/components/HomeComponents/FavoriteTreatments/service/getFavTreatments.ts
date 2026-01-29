import { instance } from "../../../../service/axiosInstance";

export const getFavTreatments = async () => {
  const response = await instance(`/api/favorite-treatments`);

  return response.data;
};
