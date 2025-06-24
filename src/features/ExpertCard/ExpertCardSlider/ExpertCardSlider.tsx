import { useState } from "react";
import sliderArrowLeft from "../../../../public/pngs/sliderArrowLeft.png";
import sliderArrowRight from "../../../../public/pngs/sliderArrowRight.png";

import cn from "classnames";
import { ourExperts } from "../constants/ourExperts";
import styles from "./expertCardSlider.module.css";

export const ExpertCardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < ourExperts.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  return (
    <div className={styles.expertCardSlider}>
      <div className={styles.expertCardSliderImg}>
        <button
          disabled={currentSlide === 0}
          className={styles.arrowButton}
          onClick={prevSlide}
        >
          <img
            src={sliderArrowLeft}
            alt="sliderArrowLeft"
            className={cn(styles.arrow, styles.leftArrow, {
              [styles.arrowActive]: currentSlide !== 0,
            })}
          />
        </button>

        <div className={styles.slidesContainer}>
          <div
            className={styles.slides}
            style={{ transform: `translateX(-${currentSlide * 500}px)` }}
          >
            {ourExperts.map((ourExpert) => (
              <div className={styles.slide} key={ourExpert.id}>
                <img
                  src={ourExpert.imgUrl}
                  alt={ourExpert.name}
                  className={styles.expertImg}
                  width={450}
                />
                <span className={cn(styles.expertName, "poppins-regular")}>
                  {ourExpert.name}
                </span>
                <span
                  className={cn(
                    styles.expertProfession,
                    "poppins-light-italic"
                  )}
                >
                  {ourExpert.profession}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          disabled={currentSlide === 1}
          className={styles.arrowButton}
          onClick={nextSlide}
        >
          <img
            src={sliderArrowRight}
            alt="sliderArrowRight"
            className={cn(styles.arrow, styles.rightArrow, {
              [styles.arrowActive]: currentSlide !== 1,
            })}
          />
        </button>
      </div>
    </div>
  );
};
