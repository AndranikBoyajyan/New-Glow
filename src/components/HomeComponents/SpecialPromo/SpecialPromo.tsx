import specialPromoTitle from "/pngs/specialPromoTitle.png";
import cn from "classnames";
import styles from "./SpecialPromo.module.css";
import Button from "../../../shared/Button";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { useCallback, useState } from "react";
import Dialog from "../../../shared/Dialog";
import BookAConsultationPopup from "../../GeneralComponents/BookAConsultationPopup";

export const SpecialPromo = () => {
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
    <div className={styles.specialPromo}>
      <div className={styles.specialPromoContent}>
        <div className={styles.specialPromoTitleWrapper}>
          <img
            src={specialPromoTitle}
            className={styles.specialPromoTitle}
            alt="text"
          />
        </div>
        <div className={styles.specialPromoBottomSideWrapper}>
          <div className={styles.textAndButtons}>
            <div className={styles.promoText}>
              <span className={cn(styles.text_56, "dm-serif-display-regular")}>
                BUY 2 FACIALS
              </span>
              <span className={cn(styles.text_78, "dm-serif-display-italic")}>
                GET 3RD FREE
              </span>
            </div>
            <div className={styles.buttons}>
              <Button
                content="Book a consultation"
                className="button_dark"
                font="poppins-medium"
                handleClick={handleOpenModal}
              />
              <Button
                content="See all promos"
                className="button_light_transparent"
                font="poppins-medium"
              />
            </div>
          </div>
          {!isMobile && (
            <div className={styles.rightSideText}>
              <span className={cn(styles.text_24, "poppins-regular")}>
                Gua Sha Facial
              </span>
              <span className={cn(styles.text_24, "poppins-regular")}>
                Oxygen Facial
              </span>
              <span className={cn(styles.text_24, "poppins-regular")}>
                Hydro Facial
              </span>
            </div>
          )}
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
