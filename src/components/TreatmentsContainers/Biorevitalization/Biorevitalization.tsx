import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import IPLPhotothrapyHeader from "/pngs/IPLPhotothrapyHeader.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";
import cn from "classnames";
import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./Biorevitalization.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import Button from "../../../shared/Button";

export const Biorevitalization = () => {
  return (
    <div className={styles.biorevitalization}>
      <div className={styles.biorevitalizationTopSide}>
        <SingleTreatmentHeader
          title="Biorevitalization"
          imgUrl={IPLPhotothrapyHeader}
        />
        <SingleTreatmentDescription description={description} />
        <SingleTreatmentWhenBlock
          question={whenBlockTexts.question}
          answers={whenBlockTexts.answers}
          imgUrl={whenBlockTexts.imgUrl}
        />
      </div>
      <div className={cn(styles.PdoTopPart, "poppins-semibold")}>
        <span>PDO Threads</span>
        <span className={cn("poppins-regular")}>PRP(Platelet-Rich Plasma)</span>
      </div>
      <div className={cn(styles.textBlock, "poppins-semibold")}>
        <span>
          PDO (Polydioxanone) threads are biodegradable surgical sutures used in
          aesthetic medicine to lift, tighten, and rejuvenate the skin without
          surgery. Once inserted under the skin, they create a subtle lifting
          effect while stimulating natural collagen production over time. The
          threads dissolve gradually over 6–8 months, but their lifting and
          firming results can last up to a year or more.
        </span>
      </div>
      <div className={styles.cards}>
        {cardsInfos.map((cardInfo) => (
          <TreatmentPageCard key={cardInfo.id} {...cardInfo} />
        ))}
        <div className={styles.biorevitalizationBookButton}>
          <Button content="Book a consultation" className="button_dark" />
        </div>
      </div>
    </div>
  );
};
