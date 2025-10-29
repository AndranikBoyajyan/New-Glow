import { useCallback, useState, type FC } from "react";
import cn from "classnames";
import type { ILaserPageTreatmentCardList } from "../../types/global.types";
import Button from "../../shared/Button";
import styles from "./laserPageTreatmentCard.module.css";
import Dialog from "../../shared/Dialog";
import BookAConsultationPopup from "../../components/GeneralComponents/BookAConsultationPopup";

interface LaserPageTreatmentCardProps {
  BodyPartList: ILaserPageTreatmentCardList[];
  imgUrl: string;
}

export const LaserPageTreatmentCard: FC<LaserPageTreatmentCardProps> = ({
  BodyPartList,
  imgUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div className={styles.laserPageTreatmentCard}>
      <div
        className={styles.imgBlock}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className={styles.textBlockAndButton}>
        <div className={styles.textBlock}>
          {BodyPartList.map((treatmentType) => (
            <div key={treatmentType.id} className={styles.eachTreatmentType}>
              <span className={cn(styles.txt, "poppins-light")}>
                {treatmentType.name}
              </span>
              <div className={styles.durationAndPriceBlock}>
                <span className={cn(styles.txt, "poppins-light-italic")}>
                  {treatmentType.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
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
