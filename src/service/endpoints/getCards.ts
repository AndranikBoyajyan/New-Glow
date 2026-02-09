import type { CardType } from "../../types/global.types";
import { api } from "../axiosInstance";

export const getBlogCards = async () => {
  const response = await api.get<CardType[]>(`blog-cards`);

  return response.data;
};
