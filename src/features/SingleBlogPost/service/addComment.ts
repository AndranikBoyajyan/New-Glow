import { api } from "../../../service/axiosInstance";

export const addComment = async (comment: string, blogId: number) => {
  const response = await api.post(`blog-comments/${blogId}`, {
    comment,
  });

  return response.data;
};
