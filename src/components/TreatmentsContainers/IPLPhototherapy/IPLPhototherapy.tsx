import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import IPLPhototherapyHeader from "/pngs/IPLPhototherapyHeader.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./IPLPhototherapy.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import Button from "../../../shared/Button";

export const IPLPhototherapy = () => {
  return (
    <div className={styles.IPLPhototherapy}>
      <div className={styles.IPLPhototherapyTopSide}>
        <SingleTreatmentHeader
          title="IPL Phototherapy"
          imgUrl={IPLPhototherapyHeader}
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
        <div className={styles.IplBookButton}>
          <Button content="Book a consultation" className="button_dark" />
        </div>
      </div>
    </div>
  );
};
