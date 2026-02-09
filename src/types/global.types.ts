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
  slug: string;
  description: string;
  views: number;
  isLiked: boolean;
  comments: string[];
  commentsCount: number;
  imgUrl: string;
  likeCount: number;
  allDescription:
    | {
        subTitle?: string;
        description: string;
      }[];
}

export interface CardType {
  id: number;
  slug: string;
  commentCount: number;
  viewCount: number;
  likeCount: number;
  isLiked: boolean;
}
