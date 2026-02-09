import { api } from "../axiosInstance";

export const addOrRemoveLike = async (id: number) => {
  const response = await api.post(`blog-likes/${id}`);

  return response.data;
};
