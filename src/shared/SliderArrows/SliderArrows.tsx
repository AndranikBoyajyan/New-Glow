import type { FC, JSX } from "react";
import cn from "classnames";
import sliderArrowLeft from "/webpImages/sliderArrowLeft.webp";
import sliderArrowRight from "/webpImages/sliderArrowRight.webp";

import styles from "./SliderArrows.module.css";

interface SliderArrowsProps {
  slides: (string | JSX.Element)[];
  currentSlide: number;
  handleSwipe: (increment?: boolean) => void;
}

export const SliderArrows: FC<SliderArrowsProps> = ({
  slides,
  currentSlide,
  handleSwipe,
}) => {
  return (
    <div className={styles.arrows}>
      <button
        disabled={currentSlide === 0}
        className={styles.arrowButton}
        onClick={() => handleSwipe()}
      >
        <img
          src={sliderArrowLeft}
          alt="sliderArrowLeft"
          className={cn(styles.arrow, styles.leftArrow, {
            [styles.arrowActive]: currentSlide !== 0,
          })}
        />
      </button>

      <button
        disabled={currentSlide === slides.length - 1}
        className={styles.arrowButton}
        onClick={() => handleSwipe(true)}
      >
        <img
          src={sliderArrowRight}
          alt="sliderArrowRight"
          className={cn(styles.arrow, styles.rightArrow, {
            [styles.arrowActive]: currentSlide !== slides.length - 1,
          })}
        />
      </button>
    </div>
  );
};
