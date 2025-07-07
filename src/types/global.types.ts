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
