import { api } from "../../../../service/axiosInstance";

export const createBlogViews = async (slug: string) => {
  const response = await api.post(`blog-views/${slug}`);

  return response.data;
};
