import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import facialContHeader from "/pngs/facialContHeader.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./FacialContouring.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";

export const FacialContouring = () => {
  return (
    <div className={styles.facialContouring}>
      <div className={styles.facialContouringTopSide}>
        <SingleTreatmentHeader
          title="Facial Contouring"
          imgUrl={facialContHeader}
          isFacialCont
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
