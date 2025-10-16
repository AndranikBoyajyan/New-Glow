import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import vitaminHeader from "/webpImages/vitaminHeader.webp";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./VitaminTherapy.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const VitaminTherapy = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.vitaminTherapy}>
      <div className={styles.vitaminTherapyTopSide}>
        <SingleTreatmentHeader
          title="IV Vitamin Therapy"
          imgUrl={vitaminHeader}
        />
        <SingleTreatmentDescription
          title={isMobile ? "IV Vitamin Therapy" : undefined}
          description={description}
        />
        <SingleTreatmentWhenBlock
          question={whenBlockTexts.question}
          answers={whenBlockTexts.answers}
          imgUrl={whenBlockTexts.imgUrl}
        />
      </div>
      <div className={styles.cards}>
        {cardsInfos.map((cardInfo) => (
          <TreatmentPageCard key={cardInfo.id} {...cardInfo} />
        ))}
      </div>
    </div>
  );
};
