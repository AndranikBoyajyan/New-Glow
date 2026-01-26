import axios from "axios";

export const BASE_URL = import.meta.env.VITE_SERVER_API;

export const getFavTreatments = async () => {
  const response = await axios(`${BASE_URL}api/favorite-treatments`);

  return response.data;
};
