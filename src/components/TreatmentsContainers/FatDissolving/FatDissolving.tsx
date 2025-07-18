import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import FatDissolvingHeader from "/pngs/FatDissolvingHeader.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import SingleTreatmentPatientsResults from "../../../entities/SingleTreatmentPatientsResults";
import Button from "../../../shared/Button";
import styles from "./fatDissolving.module.css";

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
        <div className={styles.fatDissolvingBookButton}>
          <Button content="Book a consultation" className="button_dark" />
        </div>
      </div>
      <div className={styles.patientsResultsWrapper}>
        <SingleTreatmentPatientsResults firstName="Acne detox facial (1 course completed) " />
      </div>
    </div>
  );
};
