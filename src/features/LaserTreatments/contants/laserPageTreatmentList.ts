import type { ILaserPageTreatmentCardList } from "../../../types/global.types";

interface ILaserTreatmentBodyPartsList {
  id: number;
  imgUrl: string;
  bodyParts: ILaserPageTreatmentCardList[];
}

export const LASERTREATMENTBODYPARTSLIST: ILaserTreatmentBodyPartsList[] = [
  {
    id: 1,
    imgUrl: "./pngs/image1.png",
    bodyParts: [
      {
        id: 1,
        name: "Full Face",
        duration: "1 Hr",
        price: "$35",
      },
      {
        id: 2,
        name: "Partial Face",
        duration: "1 Hr",
        price: "$25",
      },
      {
        id: 3,
        name: "Side Burns",
        duration: "1 Hr",
        price: "$15",
      },
      {
        id: 4,
        name: "Lip",
        duration: "1 Hr",
        price: "$15",
      },
      {
        id: 5,
        name: "Chin",
        duration: "1 Hr",
        price: "$15",
      },
      {
        id: 6,
        name: "Lip And Chin",
        duration: "1 Hr",
        price: "$25",
      },
      {
        id: 7,
        name: "Cheeks",
        duration: "1 Hr",
        price: "$20",
      },
      {
        id: 8,
        name: "Hair Line",
        duration: "1 Hr",
        price: "$25",
      },
      {
        id: 9,
        name: "Front of Neck",
        duration: "1 Hr",
        price: "$20",
      },
      {
        id: 10,
        name: "Head",
        duration: "1 Hr",
        price: "$20",
      },
    ],
  },
  {
    id: 2,
    imgUrl: "./pngs/image2.png",
    bodyParts: [
      {
        id: 1,
        name: "Full Arms",
        duration: "1 Hr",
        price: "$85",
      },
      {
        id: 2,
        name: "Half Arms",
        duration: "1 Hr",
        price: "$45",
      },
      {
        id: 3,
        name: "3/4 Arms",
        duration: "1 Hr",
        price: "$65",
      },
      {
        id: 4,
        name: "Under Arms",
        duration: "1 Hr",
        price: "$15",
      },
      {
        id: 5,
        name: "Hands & Fingers",
        duration: "1 Hr",
        price: "$20",
      },
      {
        id: 6,
        name: "Fingers",
        duration: "1 Hr",
        price: "$10",
      },
    ],
  },
  {
    id: 3,
    imgUrl: "./pngs/image3.png",
    bodyParts: [
      {
        id: 1,
        name: "Full Legs",
        duration: "1 Hr",
        price: "$150",
      },
      {
        id: 2,
        name: "Upper legs",
        duration: "1 Hr",
        price: "$85",
      },
      {
        id: 3,
        name: "Lower Legs",
        duration: "1 Hr",
        price: "$75",
      },
      {
        id: 4,
        name: "Inner Thighs",
        duration: "1 Hr",
        price: "$35",
      },
      {
        id: 5,
        name: "Knees",
        duration: "1 Hr",
        price: "$20",
      },
      {
        id: 6,
        name: "Feet & Toes",
        duration: "1 Hr",
        price: "$20",
      },
      {
        id: 7,
        name: "Toes",
        duration: "1 Hr",
        price: "$10",
      },
    ],
  },
  {
    id: 4,
    imgUrl: "./pngs/image4.png",
    bodyParts: [
      {
        id: 1,
        name: "Bikini Full Female",
        duration: "1 Hr",
        price: "$45",
      },
      {
        id: 2,
        name: "Full Male Groin",
        duration: "1 Hr",
        price: "$75",
      },
      {
        id: 3,
        name: "Partial Bikini",
        duration: "1 Hr",
        price: "$35",
      },
      {
        id: 4,
        name: "Bikini Line",
        duration: "1 Hr",
        price: "$25",
      },
      {
        id: 5,
        name: "Buttocks",
        duration: "1 Hr",
        price: "$45",
      },
      {
        id: 6,
        name: "Partial Buttocks",
        duration: "1 Hr",
        price: "$35",
      },
    ],
  },
  {
    id: 5,
    imgUrl: "./pngs/image5.png",
    bodyParts: [
      {
        id: 1,
        name: "Full chest",
        duration: "1 Hr",
        price: "$45",
      },
      {
        id: 2,
        name: "Partial chest",
        duration: "1 Hr",
        price: "$25",
      },
      {
        id: 3,
        name: "Aereolas",
        duration: "1 Hr",
        price: "$15",
      },
      {
        id: 4,
        name: "Chest Line",
        duration: "1 Hr",
        price: "$15",
      },
      {
        id: 5,
        name: "Full Chest & Stomach",
        duration: "1 Hr",
        price: "$75",
      },
      {
        id: 6,
        name: "Full Stomach",
        duration: "1 Hr",
        price: "$40",
      },
      {
        id: 7,
        name: "partial Stomach",
        duration: "1 Hr",
        price: "$25",
      },
      {
        id: 8,
        name: "Belly Line (Happy Trail)",
        duration: "1 Hr",
        price: "$15",
      },
    ],
  },
  {
    id: 6,
    imgUrl: "./pngs/image6.png",
    bodyParts: [
      {
        id: 1,
        name: "Full Back",
        duration: "1 Hr",
        price: "$75",
      },
      {
        id: 2,
        name: "Lower back",
        duration: "1 Hr",
        price: "$25",
      },
      {
        id: 3,
        name: "half back",
        duration: "1 Hr",
        price: "$40",
      },
      {
        id: 4,
        name: "Back of Neck",
        duration: "1 Hr",
        price: "$20",
      },
    ],
  },
];
