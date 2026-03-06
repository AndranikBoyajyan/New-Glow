import { api } from "../axiosInstance";

export const getRecentPosts = async (currentId: number) => {
  const response = await api.get(`blog-cards/recent/${currentId}`);

  return response.data;
};
