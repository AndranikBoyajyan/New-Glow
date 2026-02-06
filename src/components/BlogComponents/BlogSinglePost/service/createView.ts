import { api } from "../../../../service/axiosInstance";

export const createBlogView = async (id: number) => {
  const response = await api.post(`blog-views/${id}`);

  return response.data;
};
