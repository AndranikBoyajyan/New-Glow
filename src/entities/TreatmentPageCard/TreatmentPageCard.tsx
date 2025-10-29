import { useCallback, useState, type FC } from "react";
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

  const [showMore, setShowMore] = useState(false);

  const { width } = useWindowSize();
  const isMobile = width < MEDIA_TABLET_SMALL;

  const slicedDescription = description.slice(0, description.indexOf(".") + 1);

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
          <div
            className={
              !showMore ? styles.descriptionBlock : styles.descriptionBlockShow
            }
          >
            <span className={cn(styles.description, "poppins-regular")}>
              {showMore ? description : slicedDescription}
            </span>
          </div>
          <div>
            <button
              className={styles.showMoreButton}
              onClick={() => setShowMore(!showMore)}
            >
              <span
                className={cn(styles.showMoreButtonWrapper, "poppins-italic")}
              >
                {showMore ? "less" : "read more"}
              </span>
            </button>
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
