import { api } from "../axiosInstance";

export const getBlogViews = async () => {
  const response = await api.get(`blog-views`);

  return response.data;
};
