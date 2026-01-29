import { api } from "../../../../service/axiosInstance";

export const getBlogPost = async (slug: string) => {
  const response = await api.get(`blog-card/${slug}`);

  return response.data;
};
