import { useState } from "react";
import cn from "classnames";
import homepageSlider1 from "../../../public/pngs/homepageSlider1.png";
import homepageSlider2 from "../../../public/pngs/homepageSlider2.png";
import { classNames } from "./constants/classnames";
import TitleSVG from "../../assets/RadianceBeginsHere.svg";

import HomeSlider from "../../features/HomeSlider";
import styles from "./RadianceBegin.module.css";

export const RadianceBegin = () => {
  const [animation, setAnimation] = useState(1);

  const handleClick = (name: string) => {
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
          imageSrc={homepageSlider1}
          sliderSide="left"
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
          imageSrc={homepageSlider2}
          sliderSide="right"
        />
      </div>
      <div className={styles.sliderButtons}>
        <button
          name="first"
          className={cn(styles.slideBtn, {
            [styles.active]: animation === 1,
          })}
          onClick={(e) => handleClick(e.currentTarget.name)}
        />
        <button
          name="second"
          className={cn(styles.slideBtn, {
            [styles.active]: animation === 2,
          })}
          onClick={(e) => handleClick(e.currentTarget.name)}
        />
      </div>
    </div>
  );
};
