import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import IPLPhototherapyHeader from "/webpImages/IPLPhototherapyHeader.webp";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./IPLPhototherapy.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import Button from "../../../shared/Button";
import { useCallback, useState } from "react";
import Dialog from "../../../shared/Dialog";
import BookAConsultationPopup from "../../GeneralComponents/BookAConsultationPopup";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const IPLPhototherapy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

  return (
    <div className={styles.IPLPhototherapy}>
      <div className={styles.IPLPhototherapyTopSide}>
        <SingleTreatmentHeader
          title="IPL Phototherapy"
          imgUrl={IPLPhototherapyHeader}
        />
        <SingleTreatmentDescription
          title={isMobile ? "IPL Phototherapy" : undefined}
          description={description}
        />
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
          <Button
            content="Book a consultation"
            className="button_dark"
            handleClick={handleOpenModal}
          />
        </div>
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
