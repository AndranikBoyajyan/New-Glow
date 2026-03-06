import { api } from "../axiosInstance";

export const getComments = async (slug: string) => {
  const response = await api.get(`blog-comments/${slug}`);

  return response.data;
};
