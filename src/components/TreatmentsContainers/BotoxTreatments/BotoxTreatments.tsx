import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import IPLPhototherapyHeader from "/pngs/IPLPhototherapyHeader.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";
import cn from "classnames";
import { whenBlockTexts } from "./constants/whenBlockTexts";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import Button from "../../../shared/Button";

import styles from "./BotoxTreatments.module.css";
import SingleTreatmentPatientsResults from "../../../entities/SingleTreatmentPatientsResults";

export const BotoxTreatments = () => {
  return (
    <div className={styles.botoxTreatments}>
      <div className={styles.botoxTreatmentsTopSide}>
        <SingleTreatmentHeader
          title="Botox Treatments"
          imgUrl={IPLPhototherapyHeader}
        />
        <SingleTreatmentDescription description={description} />
        <SingleTreatmentWhenBlock
          question={whenBlockTexts.question}
          answers={whenBlockTexts.answers}
          imgUrl={whenBlockTexts.imgUrl}
        />
      </div>
      <div className={cn(styles.chooseBy)}>
        <h3
          className={cn(styles.pdoTitle, styles.underline, "poppins-regular")}
        >
          CHOOSE By TREATMENT
        </h3>
        <h3 className={cn(styles.pdoTitle, "poppins-regular")}>
          CHOOSE by Medication
        </h3>
      </div>
      <div className={styles.cards}>
        {cardsInfos.map((cardInfo) => (
          <TreatmentPageCard key={cardInfo.id} {...cardInfo} />
        ))}
        <div className={styles.botoxTreatmentsBookButton}>
          <Button content="Book a consultation" className="button_dark" />
        </div>
      </div>
      <div className={styles.patientsResultsWrapper}>
        <SingleTreatmentPatientsResults firstName="Eyeopening and Bunny Lines botox (Xeomin)" />
      </div>
    </div>
  );
};
