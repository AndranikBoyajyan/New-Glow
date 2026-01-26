import type { ITreatment } from "../features/Treatments/model";

export interface ITreatmentCategory {
  id: number;
  name: string;
  imgUrl: string;
  treatments: ITreatment[];
}

export interface ILaserPageTreatmentCardList {
  id: number;
  name: string;
  duration: string;
  price: string;
}

export interface IFavoriteTreatments {
  id: number;
  imageUrl: string;
  title: string;
}

export interface IBlogCardsInfo {
  id: number;
  specialistName: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  views: number;
  commentsCount: number;
  imgUrl: string;
  likeCount?: number;
  allDescription:
    | {
        subTitle?: string;
        description: string;
      }[];
}
