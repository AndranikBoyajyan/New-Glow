import cn from "classnames";
import Button from "../../../shared/Button";
import { useNavigate } from "react-router";
import TitleSvg from "../../../assets/RadianceBeginsHere.svg";

import styles from "./SecondSlide.module.css";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { useCallback, useState } from "react";
import Dialog from "../../../shared/Dialog";
import BookAConsultationPopup from "../../../components/GeneralComponents/BookAConsultationPopup";

export const SecondSlide = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = width < MEDIA_TABLET_SMALL;
  const navigate = useNavigate();

  const handleSeeAllTreatments = () => {
    navigate("all-treatments");
  };

  const handleOpenModal = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div
      className={cn(styles.secondSlide)}
      style={{
        backgroundImage: isMobile ? `url(/pngs/homepageSlider2.png)` : "",
      }}
    >
      <div className={cn(styles.img)}></div>
      <div className={cn(styles.radianceBegin)}>
        <div className={styles.titleTopSide}>
          <div
            className={cn(styles.titleWrapper, styles.svg)}
            style={{
              backgroundImage: `url(${TitleSvg})`,
            }}
          ></div>
          <span className={cn(styles.subTitle, "spectral-regular")}>
            Advanced Skincare Backed by Science
          </span>
        </div>
        <div className={cn(styles.infoTextWrapper)}>
          <span className={cn(styles.infoText, "poppins-regular")}>
            We provide medically-informed treatments and custom plans designed
            to improve your skin health from the inside out.
          </span>
          <div className={styles.buttons}>
            <Button
              content="Book a consultation"
              className="button_dark"
              handleClick={handleOpenModal}
            />
            <Button
              content="See all treatments"
              className="button_light_transparent"
              handleClick={handleSeeAllTreatments}
            />
          </div>
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
