import injectablesImage from "/pngs/injectablesHomeImage.png";
import skincareImage from "/pngs/skincareHomeImage.png";
import faceAndBodySculptingImage from "/pngs/faceAndBodySculptingHomeImage.png";
import iplPhototherapyImage from "/pngs/iplPhototherapyHomeImage.png";
import laserHairRemovalImage from "/pngs/laserHairRemovalHomeImage.png";
import type { ITreatmentCategory } from "../types/global.types";
import { TREATMENTS } from "../constants/treatments";

export const TREATMENTS_CATEGORIES: ITreatmentCategory[] = [
  {
    id: 1,
    name: "Injectables",
    imgUrl: injectablesImage,
    treatments: TREATMENTS.filter((treatment) => treatment.categoryId === 1),
  },
  {
    id: 2,
    name: "Skincare",
    imgUrl: skincareImage,
    treatments: TREATMENTS.filter((treatment) => treatment.categoryId === 2),
  },
  {
    id: 3,
    name: "Face And Body Sculpting",
    imgUrl: faceAndBodySculptingImage,
    treatments: TREATMENTS.filter((treatment) => treatment.categoryId === 3),
  },
  {
    id: 4,
    name: "IPL Phototherapy",
    imgUrl: iplPhototherapyImage,
    treatments: TREATMENTS.filter((treatment) => treatment.categoryId === 4),
  },
  {
    id: 5,
    name: "Laser Hair Removal",
    imgUrl: laserHairRemovalImage,
    treatments: TREATMENTS.filter((treatment) => treatment.categoryId === 5),
  },
];
