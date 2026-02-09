import { api } from "../axiosInstance";

export const getFavTreatments = async () => {
  const response = await api.get(`/favorite-treatments`);

  return response.data;
};
