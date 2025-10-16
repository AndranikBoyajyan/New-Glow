import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import LaserHairRemovalHeaderImg from "/webpImages/LaserHairRemovalHeaderImg.webp";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./laserHairRemoval.module.css";
import { cardsInfos } from "./constants/CardInfo";
import LaserPageTreatmentCard from "../../../entities/LaserPageTreatmentCard";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const LaserHairRemoval = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

  return (
    <div className={styles.laserHairRemoval}>
      <div className={styles.laserHairRemovalTopSide}>
        <SingleTreatmentHeader
          title="Laser Hair Removal"
          imgUrl={LaserHairRemovalHeaderImg}
          isLaserPage
        />
        <SingleTreatmentDescription
          title={isMobile ? "Laser Hair Removal" : undefined}
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
          <LaserPageTreatmentCard
            BodyPartList={cardInfo.bodyParts}
            imgUrl={cardInfo.imgUrl}
            key={cardInfo.id}
          />
        ))}
      </div>
    </div>
  );
};
