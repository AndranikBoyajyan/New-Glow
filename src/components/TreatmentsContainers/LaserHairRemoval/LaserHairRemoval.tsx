import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import LaserHairRemovalHeaderImg from "/pngs/LaserHairRemovalHeaderImg.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./laserHairRemoval.module.css";
import { cardsInfos } from "./constants/CardInfo";
import LaserPageTreatmentCard from "../../../entities/LaserPageTreatmentCard";

export const LaserHairRemoval = () => {
  return (
    <div className={styles.laserHairRemoval}>
      <div className={styles.laserHairRemovalTopSide}>
        <SingleTreatmentHeader
          title="Laser Hair Removal"
          imgUrl={LaserHairRemovalHeaderImg}
        />
        <SingleTreatmentDescription description={description} />
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
