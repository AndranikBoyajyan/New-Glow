import cn from "classnames";
import homepageSlider1 from "/pngs/homepageSlider1.png";
import homepageSlider2 from "/pngs/homepageSlider2.png";
import Button from "../../shared/Button";
import { useMemo, type FC } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./HomeSlider.module.css";
import { useNavigate } from "react-router";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";

interface HomeSliderProps {
  classNames: Record<string, string>;
  svg: string;
  sliderSide: "left" | "right";
  animation: number;
  handleChangeSlide: (name: string) => void;
}

export const HomeSlider: FC<HomeSliderProps> = ({
  classNames,
  svg,
  sliderSide,
  animation,
  handleChangeSlide,
}) => {
  const { width } = useWindowSize(); // TODO: use media queries
  const sliderImgUrl = useMemo(
    () => (animation === 1 ? homepageSlider1 : homepageSlider2),
    [animation]
  );

  const navigate = useNavigate();

  const handleSeeAllTreatments = () => {
    navigate("all-treatments");
  };

  return (
    <div
      className={styles[classNames.homeSliderWrapper]}
      style={{
        backgroundImage:
          width < MEDIA_TABLET_SMALL ? `url(${sliderImgUrl})` : "",
      }}
    >
      <div
        className={cn(styles.homeSlider, {
          [styles[classNames.homeSliderRight]]: sliderSide === "right",
        })}
      >
        <div
          className={cn(styles[classNames.radianceBegin], {
            [styles[classNames.radianceBeginLeft]]: sliderSide === "left",
            [styles[classNames.radianceBeginRight]]: sliderSide === "right",
          })}
        >
          <div className={styles.titleTopSide}>
            <div
              className={cn(styles[classNames.titleWrapper], styles.svg, {
                [styles[classNames.titleWrapperLeft]]: sliderSide === "left",
                [styles[classNames.titleWrapperRight]]: sliderSide === "right",
              })}
              style={{
                backgroundImage: `url(${svg})`,
              }}
            ></div>
            <span
              className={cn(styles[classNames.subTitle], "spectral-regular")}
            >
              Advanced Skincare Backed by Science
            </span>
          </div>
          <div
            className={cn(styles[classNames.infoTextWrapper], {
              [styles[classNames.infoTextWrapperLeft]]: sliderSide === "left",
              [styles[classNames.infoTextWrapperRight]]: sliderSide === "right",
            })}
          >
            <span
              className={cn(styles[classNames.infoText], "poppins-regular")}
            >
              We provide medically-informed treatments and custom plans designed
              to improve your skin health from the inside out.
            </span>
            <div className={styles[classNames.buttons]}>
              <Button content="Book a consultation" className="button_dark" />
              <Button
                content="See all treatments"
                className="button_light_transparent"
                handleClick={handleSeeAllTreatments}
              />
            </div>
          </div>
        </div>
        <div
          className={cn(styles[classNames.img], {
            [styles.img1]: sliderSide === "left",
            [styles.img2]: sliderSide === "right",
          })}
        ></div>
      </div>
      <div className={styles.sliderButtons}>
        <button
          name="first"
          className={cn(styles.slideBtn, {
            [styles.active]: animation === 1,
          })}
          onClick={(e) => handleChangeSlide(e.currentTarget.name)}
        />
        <button
          name="second"
          className={cn(styles.slideBtn, {
            [styles.active]: animation === 2,
          })}
          onClick={(e) => handleChangeSlide(e.currentTarget.name)}
        />
      </div>
    </div>
  );
};
