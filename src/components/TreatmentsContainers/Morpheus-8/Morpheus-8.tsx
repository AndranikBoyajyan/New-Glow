import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import morpheus8Header from "/pngs/morpheus8Header.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./morpheus-8.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";

export const Morpheus8 = () => {
  return (
    <div className={styles.morpheus}>
      <div className={styles.morpheusTopSide}>
        <SingleTreatmentHeader title="Morpheus-8" imgUrl={morpheus8Header} />
        <SingleTreatmentDescription description={description} />
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
