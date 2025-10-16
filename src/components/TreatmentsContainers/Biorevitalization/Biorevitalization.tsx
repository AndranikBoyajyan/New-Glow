import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import biorevitalization from "../../../../public/webpImages/biorevitalization.webp";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";
import cn from "classnames";
import { whenBlockTexts } from "./constants/whenBlockTexts";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import Button from "../../../shared/Button";
import { useCallback, useState } from "react";
import Dialog from "../../../shared/Dialog";
import BookAConsultationPopup from "../../GeneralComponents/BookAConsultationPopup";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

import styles from "./Biorevitalization.module.css";

export const Biorevitalization = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div className={styles.biorevitalization}>
      <div className={styles.biorevitalizationTopSide}>
        <SingleTreatmentHeader
          title="Biorevitalization"
          imgUrl={biorevitalization}
        />
        <SingleTreatmentDescription
          title={isMobile ? "Biorevitalization" : undefined}
          description={description}
        />
        <SingleTreatmentWhenBlock
          question={whenBlockTexts.question}
          answers={whenBlockTexts.answers}
          imgUrl={whenBlockTexts.imgUrl}
        />
      </div>
      <div className={styles.PdoTopPart}>
        <span className={cn(styles.pdoTitle, styles.bold, "poppins-semibold")}>
          PDO THREADS
        </span>
        <span className={cn(styles.pdoTitle, "poppins-regular")}>
          {"PRP(Platelet-Rich Plasma)".toUpperCase()}
        </span>
      </div>
      <div className={cn(styles.textBlock, "poppins-semibold")}>
        <span className={cn(styles.pdoText, "poppins-regular")}>
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
