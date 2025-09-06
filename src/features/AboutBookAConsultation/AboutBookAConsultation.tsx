import Button from "../../shared/Button";
import cn from "classnames";

import styles from "./AboutBookAConsultation.module.css";
import { useCallback, useState } from "react";
import Dialog from "../../shared/Dialog";
import BookAConsultationPopup from "../../components/GeneralComponents/BookAConsultationPopup";

export const AboutBookAConsultation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <div className={styles.aboutBookAConsultation}>
      <span className={cn(styles.text, "poppins-medium")}>
        We're here to guide you every step of the way—with care, integrity, and
        elegance.
      </span>
      <Button
        content="Book a consultation"
        className="button_dark"
        handleClick={handleOpenModal}
      />
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
