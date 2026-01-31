import { api } from "../../../../service/axiosInstance";

export const getBlogViews = async (slug: string) => {
  const response = await api.get(`blog-views/${slug}`);

  return response.data;
};
