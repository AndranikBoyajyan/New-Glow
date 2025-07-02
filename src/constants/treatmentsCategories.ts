import injectablesImage from "/pngs/injectablesHomeImage.png";
import skincareImage from "/pngs/skincareHomeImage.png";
import faceAndBodySculptingImage from "/pngs/faceAndBodySculptingHomeImage.png";
import iplPhototherapyImage from "/pngs/iplPhototherapyHomeImage.png";
import laserHairRemovalImage from "/pngs/laserHairRemovalHomeImage.png";
import type { ITreatmentCategory } from "../types/global.types";

export const TREATMENTS_CATEGORIES: ITreatmentCategory[] = [
  {
    id: 1,
    name: "Injectables",
    imgUrl: injectablesImage,
  },
  {
    id: 2,
    name: "Skincare",
    imgUrl: skincareImage,
  },
  {
    id: 3,
    name: "Face And Body Sculpting",
    imgUrl: faceAndBodySculptingImage,
  },
  {
    id: 4,
    name: "IPL Phototherapy",
    imgUrl: iplPhototherapyImage,
  },
  {
    id: 5,
    name: "Laser Hair Removal",
    imgUrl: laserHairRemovalImage,
  },
];
