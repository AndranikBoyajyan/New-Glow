import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import botoxTreatmentHeaderImg from "/pngs/botoxTreatmentHeaderImg.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";
import cn from "classnames";
import { whenBlockTexts } from "./constants/whenBlockTexts";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import Button from "../../../shared/Button";

import styles from "./BotoxTreatments.module.css";
import PatientsResults from "../../../entities/SingleTreatmentPatientsResults";
import Dialog from "../../../shared/Dialog";
import BookAConsultationPopup from "../../GeneralComponents/BookAConsultationPopup";
import { useCallback, useState } from "react";

export const BotoxTreatments = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <div className={styles.botoxTreatments}>
      <div className={styles.botoxTreatmentsTopSide}>
        <SingleTreatmentHeader
          title="Botox Treatments"
          imgUrl={botoxTreatmentHeaderImg}
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
          {"CHOOSE By TREATMENT".toUpperCase()}
        </h3>
        <h3 className={cn(styles.pdoTitle, "poppins-regular")}>
          {"CHOOSE by Medication".toUpperCase()}
        </h3>
      </div>
      <div className={styles.cards}>
        {cardsInfos.map((cardInfo) => (
          <TreatmentPageCard key={cardInfo.id} {...cardInfo} />
        ))}
        <div className={styles.botoxTreatmentsBookButton}>
          <Button
            content="Book a consultation"
            className="button_dark"
            handleClick={handleOpenModal}
          />
        </div>
      </div>
      <div className={styles.patientsResultsWrapper}>
        <PatientsResults firstName="Eyeopening and Bunny Lines botox (Xeomin)" />
      </div>
      <Dialog
        open={isOpen}
        onClose={handleCloseModal}
        contentClassName={"consultationPopupContent"}
      >
        <BookAConsultationPopup onClose={handleCloseModal} />
      </Dialog>
    </div>
  );
};
