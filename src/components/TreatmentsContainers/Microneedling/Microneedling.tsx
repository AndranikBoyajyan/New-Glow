import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import chemicalPeelsHeaderImg from "/pngs/chemicalPeelsHeaderImg.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./microneedling.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";

export const Microneedling = () => {
  return (
    <div className={styles.chemicalPeels}>
      <div className={styles.chemicalPeelsTopSide}>
        <SingleTreatmentHeader
          title="Microneedling"
          imgUrl={chemicalPeelsHeaderImg}
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
          <TreatmentPageCard key={cardInfo.id} {...cardInfo} />
        ))}
      </div>
    </div>
  );
};
