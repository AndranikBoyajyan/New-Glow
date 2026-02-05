import { api } from "../../../service/axiosInstance";
import type { CardType } from "../model";

export const getBlogCards = async () => {
  const response = await api.get<CardType[]>(`blog-cards`);

  return response.data;
};
