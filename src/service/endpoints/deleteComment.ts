import { api } from "../axiosInstance";

export const deleteComment = async (id: number) => {
  const response = await api.delete(`blog-comments/delete/${id}`);

  return response.data;
};
