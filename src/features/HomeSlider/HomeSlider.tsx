import cn from "classnames";
import styles from "./HomeSlider.module.css";
import Button from "../../shared/Button";
import type { FC } from "react";

interface HomeSliderProps {
  classNames: Record<string, string>;
  svg: string;
  sliderSide: "left" | "right";
}

export const HomeSlider: FC<HomeSliderProps> = ({
  classNames,
  svg,
  sliderSide,
}) => {
  return (
    <div
      className={cn(styles[classNames.homeSlider], {
        [styles[classNames.homeSliderRight]]: sliderSide === "right",
      })}
    >
      <div
        className={cn(styles[classNames.radianceBegin], {
          [styles[classNames.radianceBeginLeft]]: sliderSide === "left",
          [styles[classNames.radianceBeginRight]]: sliderSide === "right",
        })}
      >
        <div
          className={cn(styles[classNames.titleWrapper], {
            [styles[classNames.titleWrapperLeft]]: sliderSide === "left",
            [styles[classNames.titleWrapperRight]]: sliderSide === "right",
          })}
        >
          <img src={svg} alt="Title" />
          <span className={cn(styles[classNames.subTitle], "spectral-regular")}>
            Advanced Skincare Backed by Science
          </span>
        </div>
        <div
          className={cn(styles[classNames.infoTextWrapper], {
            [styles[classNames.infoTextWrapperLeft]]: sliderSide === "left",
            [styles[classNames.infoTextWrapperRight]]: sliderSide === "right",
          })}
        >
          <span className={cn(styles[classNames.infoText], "poppins-regular")}>
            We provide medically-informed treatments and custom plans designed
            to improve your skin health from the inside out.
          </span>
          <div className={styles[classNames.buttons]}>
            <Button content="Book a consultation" className="button_dark" />
            <Button content="See all treatments" className="button_light" />
          </div>
        </div>
      </div>
      {/* <img
        className={cn(styles[classNames.img], {
          [styles.img1]: sliderSide === "left",
          [styles.img2]: sliderSide === "right",
        })}
        src={imageSrc}
        alt="sliderImg"
      /> */}
      <div
        className={cn(styles[classNames.img], {
          [styles.img1]: sliderSide === "left",
          [styles.img2]: sliderSide === "right",
        })}
      ></div>
    </div>
  );
};
