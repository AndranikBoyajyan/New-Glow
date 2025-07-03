import type { ITreatment } from "../features/Treatments/model";

export interface ITreatmentCategory {
  id: number;
  name: string;
  imgUrl: string;
  treatments: ITreatment[];
}
