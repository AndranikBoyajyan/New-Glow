import { api } from "../../../service/axiosInstance";

export const addLike = async (id: number) => {
  const response = await api.post(`blog-likes/${id}`);

  return response.data;
};
