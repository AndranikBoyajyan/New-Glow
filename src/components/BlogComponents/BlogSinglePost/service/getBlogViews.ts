import { api } from "../../../../service/axiosInstance";

export const getBlogViews = async () => {
  const response = await api.get(`blog-views`);

  return response.data;
};
