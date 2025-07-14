import cn from "classnames";
import Button from "../../../shared/Button";
import { useNavigate } from "react-router";
import TitleSvg from "../../../assets/RadianceBeginsHere.svg";

import styles from "./FirstSlide.module.css";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const FirstSlide = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  const navigate = useNavigate();

  const handleSeeAllTreatments = () => {
    navigate("all-treatments");
  };

  return (
    <div
      className={cn(styles.firstSlide)}
      style={{
        backgroundImage: isMobile ? `url(/pngs/homepageSlider1.png)` : "",
      }}
    >
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
            <Button content="Book a consultation" className="button_dark" />
            <Button
              content="See all treatments"
              className="button_light_transparent"
              handleClick={handleSeeAllTreatments}
            />
          </div>
        </div>
      </div>
      <div className={cn(styles.img)}></div>
    </div>
  );
};
