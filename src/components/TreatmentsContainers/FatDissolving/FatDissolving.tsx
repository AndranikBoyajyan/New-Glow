import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import FatDissolvingHeader from "/pngs/FatDissolvingHeader.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./fatDissolving.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";

export const FatDissolving = () => {
  return (
    <div className={styles.fatDissolving}>
      <div className={styles.fatDissolvingTopSide}>
        <SingleTreatmentHeader
          title="Fat Dissolving"
          imgUrl={FatDissolvingHeader}
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
