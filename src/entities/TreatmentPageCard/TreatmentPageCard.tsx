import { useCallback, useEffect, useRef, useState, type FC } from "react";
import styles from "./TreatmentPageCard.module.css";
import Title from "../../shared/Title";
import cn from "classnames";
import Button from "../../shared/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";
import Dialog from "../../shared/Dialog";
import BookAConsultationPopup from "../../components/GeneralComponents/BookAConsultationPopup";

interface TreatmentPageCardProps {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
}

export const TreatmentPageCard: FC<TreatmentPageCardProps> = ({
  name,
  description,
  price,
  imgUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const [expanded, setExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setShowButton(el.scrollHeight > el.clientHeight);
  }, [description]);

  const { width } = useWindowSize();
  const isMobile = width < MEDIA_TABLET_SMALL;

  return (
    <div className={styles.treatmentPageCard}>
      <img src={imgUrl} alt="" />

      <div className={styles.textBlock}>
        <div className={styles.descriptionAndTitleBlock}>
          <Title
            text={name}
            className={isMobile ? "title_20" : "title_24"}
            font="poppins-light"
          />
          <span
            ref={ref}
            className={cn(styles.description, "poppins-regular", {
              [styles.clamped]: !expanded,
            })}
          >
            {description}
          </span>
          <div>
            {showButton && (
              <button
                className={styles.showMoreButton}
                onClick={() => {
                  setExpanded((prev) => !prev);
                }}
              >
                <span
                  className={cn(styles.showMoreButtonWrapper, "poppins-italic")}
                >
                  {expanded ? "Show less" : "Read more"}
                </span>
              </button>
            )}
          </div>
        </div>

        <div className={styles.priceAndButtonBlock}>
          <div className={styles.durationAndPriceBlock}>
            <span className={cn(styles.price, "poppins-light")}>{price}</span>
          </div>
          <Button
            handleClick={handleOpenModal}
            content="BOOK NOW"
            className="button_light_transparent"
          />
        </div>
        <Dialog
          open={isOpen}
          onClose={handleCloseModal}
          contentClassName={"consultationPopupContent"}
        >
          <BookAConsultationPopup onClose={handleCloseModal} />
        </Dialog>
      </div>
    </div>
  );
};
