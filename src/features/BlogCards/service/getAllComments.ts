import type { Comment } from "../../SingleBlogPost/model";
import { api } from "../../../service/axiosInstance";

export const getBlogComments = async (blogId: string) => {
  const response = await api.get<{ comments: Comment[]; count: number }>(
    `blog-comments/${blogId}`
  );

  return response.data;
};
