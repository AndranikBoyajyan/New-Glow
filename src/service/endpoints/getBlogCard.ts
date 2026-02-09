import { api } from "../axiosInstance";

export const getBlogPost = async (slug: string) => {
  const response = await api.get(`blog-cards/${slug}`);

  return response.data;
};
