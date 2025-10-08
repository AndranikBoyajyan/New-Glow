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

export interface IFavoriteTreatmentsDescription {
  id: number;
  imgUrl: string;
  name: string;
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
        subTitle: string;
        description: string;
      }[];
}
