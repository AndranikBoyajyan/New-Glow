import { api } from "../../../service/axiosInstance";

export const getBlogCards = async () => {
  const response = await api.get<{ id: number; slug: string }[]>(`blog-cards`);

  return response.data;
};
