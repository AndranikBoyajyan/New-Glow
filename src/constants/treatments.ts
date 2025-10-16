import type { ITreatment } from "../features/Treatments/model";

export const TREATMENTS: ITreatment[] = [
  {
    id: 1,
    name: "Chemical Peels",
    imgUrl: "./webpImages/chemicalPeels.webp",
    categoryId: 2,
    description:
      "By stimulating cell renewal, chemical peels help improve tone, texture, and clarity, reducing fine lines, sun damage, and uneven pigmentation.",
  },
  {
    id: 2,
    name: "Microneedling",
    imgUrl: "./webpImages/atMicroneedling.webp",
    categoryId: 2,
    description:
      "Microneedling works beneath the surface to restore skin’s vitality, promoting a firmer, brighter, and more youthful complexion.",
  },
  {
    id: 3,
    name: "Botox treatments",
    imgUrl: "./webpImages/BotoxTreatments.webp",
    categoryId: 1,
    description:
      "Botox relaxes targeted muscles to reduce fine lines and prevent new wrinkles from forming. A quick, effective way to achieve a smoother, younger-looking appearance.",
  },
  {
    id: 4,
    name: "Morpheus 8",
    imgUrl: "./webpImages/Morpheus8.webp",
    categoryId: 3,
    description:
      "This treatment goes beneath the surface to tighten and rejuvenate, helping with uneven skin, scars, and loss of elasticity. Over time, it restores firmness and definition, leaving skin smoother and more revitalized.",
  },
  {
    id: 5,
    name: "Laser Hair Removal",
    imgUrl: "./webpImages/LaserHairRemoval.webp",
    categoryId: 5,
    description:
      "By targeting hair at the root, laser hair removal ensures lasting results, giving skin a polished, smooth, and confident look.",
  },
  {
    id: 6,
    name: "Biorevitalization",
    imgUrl: "./webpImages/biorevitalizationAT.webp",
    categoryId: 1,
    description:
      "Biorevitalization is a non-surgical cosmetic treatment that rejuvenates the skin by deeply hydrating it and stimulating natural collagen production.",
  },
  {
    id: 7,
    name: "Fat Dissolving",
    imgUrl: "./webpImages/FatDisolving.webp",
    categoryId: 3,
    description:
      "Fat dissolving treatments target stubborn pockets of fat to contour and sculpt the body or face. By breaking down fat cells safely and effectively, they help improve definition and create a smoother, more balanced appearance.",
  },
  {
    id: 8,
    name: "IPL Phototherapy",
    imgUrl: "./webpImages/IPLphototherapy.webp",
    categoryId: 4,
    description:
      "IPL (Intense Pulsed Light) phototherapy targets skin imperfections such as sun damage, pigmentation, redness, and broken capillaries. It gently rejuvenates the skin, promoting a clearer, more even complexion.",
  },
  {
    id: 9,
    name: "Facials",
    imgUrl: "./webpImages/facial.webp",
    categoryId: 2,
    description:
      "Facials target your skin's unique needs, from hydration to anti-aging, giving you a healthy, luminous complexion with every session.",
  },
  {
    id: 10,
    name: "Facial contouring",
    imgUrl: "./webpImages/facialContouring.webp",
    categoryId: 1,
    description:
      "Dermal fillers restore lost volume, smooth wrinkles, and enhance facial contours with immediate, natural-looking results. Ideal for lips, cheeks, jawline, and under-eye areas.",
  },
  {
    id: 11,
    name: "Sculptra",
    imgUrl: "./webpImages/Sculptra.webp",
    categoryId: 1,
    description:
      "Sculptra stimulates your skin’s natural collagen production, gradually restoring volume and improving skin texture. A subtle, long-lasting way to achieve a firmer, more youthful look.",
  },
  {
    id: 12,
    name: "Vitamin Therapy",
    imgUrl: "./webpImages/VitaminTherapy.webp",
    categoryId: 1,
    description:
      "Vitamin therapy injections deliver essential nutrients directly into your system, boosting energy, immunity, and overall wellness. A fast, effective way to feel revitalized from the inside out.",
  },
];
