import injectablesImage from "/webpImages/injectablesHomeImage.webp";
import skincareImage from "/webpImages/skincareHomeImage.webp";
import faceAndBodySculptingImage from "/webpImages/faceAndBodySculptingHomeImage.webp";
import iplPhototherapyImage from "/webpImages/iplPhototherapyHomeImage.webp";
import laserHairRemovalImage from "/webpImages/laserHairRemovalHomeImage.webp";
import type { ITreatmentCategory } from "../types/global.types";
import { TREATMENTS } from "../constants/treatments";

export const TREATMENTS_CATEGORIES: ITreatmentCategory[] = [
  {
    id: 1,
    name: "Facial Contouring",
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
