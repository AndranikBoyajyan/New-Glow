import { useState } from "react";
import cn from "classnames";
import { classNames } from "./constants/classnames";
import TitleSVG from "../../assets/RadianceBeginsHere.svg";

import HomeSlider from "../../features/HomeSlider";
import styles from "./RadianceBegin.module.css";

export const RadianceBegin = () => {
  const [animation, setAnimation] = useState(1);

  const handleSetAnimation = (name: string) => {
    setAnimation(name === "first" ? 1 : 2);
  };

  return (
    <div className={styles.slideWrapper}>
      <div
        className={cn(styles.fadeSlide, {
          [styles.activeSlide]: animation === 1,
        })}
      >
        <HomeSlider
          classNames={classNames}
          svg={TitleSVG}
          sliderSide="left"
          animation={animation}
          handleChangeSlide={handleSetAnimation}
        />
      </div>

      <div
        className={cn(styles.fadeSlide, {
          [styles.activeSlide]: animation === 2,
        })}
      >
        <HomeSlider
          classNames={classNames}
          svg={TitleSVG}
          sliderSide="right"
          animation={animation}
          handleChangeSlide={handleSetAnimation}
        />
      </div>
    </div>
  );
};
