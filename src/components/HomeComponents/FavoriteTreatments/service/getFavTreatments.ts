import { api } from "../../../../service/axiosInstance";

export const getFavTreatments = async () => {
  const response = await api.get(`/favorite-treatments`);

  return response.data;
};
