import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import FatDissolvingHeader from "/pngs/FatDissolvingHeader.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import PatientsResults from "../../../entities/SingleTreatmentPatientsResults";
import Button from "../../../shared/Button";
import styles from "./fatDissolving.module.css";
import Dialog from "../../../shared/Dialog";
import BookAConsultationPopup from "../../GeneralComponents/BookAConsultationPopup";
import { useCallback, useState } from "react";

export const FatDissolving = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

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
          <Button
            content="Book a consultation"
            className="button_dark"
            handleClick={handleOpenModal}
          />
        </div>
      </div>
      <div className={styles.patientsResultsWrapper}>
        <PatientsResults firstName="Acne detox facial (1 course completed) " />
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
