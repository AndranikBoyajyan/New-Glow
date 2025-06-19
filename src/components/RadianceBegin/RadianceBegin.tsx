import cn from "classnames";
import homepageSlider1 from "../../../public/pngs/homepageSlider1.png";
import homepageSlider2 from "../../../public/pngs/homepageSlider2.png";

import TitleSVG from "../../assets/Title.svg";

import styles from "./RadianceBegin.module.css";
import { useState } from "react";
import Button from "../../shared/Button";

export const RadianceBegin = () => {
  const [animation, setAnimation] = useState(1);

  const handleClick = (name: string) => {
    setAnimation(name === "first" ? 1 : 2);
  };

  return (
    <>
      <div className={styles.slideWrapper}>
        <div
          className={cn(styles.fadeSlide, {
            [styles.activeSlide]: animation === 1,
          })}
        >
          <div className={styles.homeSlider}>
            <div
              className={cn(styles.radianceBegin, styles.radianceBegin_left)}
            >
              <div
                className={cn(styles.titleWrapper, styles.titleWrapper_left)}
              >
                <img src={TitleSVG} alt="Title" />
                <span className={cn(styles.subTitle, "spectral-regular")}>
                  Advanced Skincare Backed by Science
                </span>
              </div>
              <div
                className={cn(
                  styles.infoTextWrapper,
                  styles.infoTextWrapper_left
                )}
              >
                <span className={cn(styles.infoText, "poppins-regular")}>
                  We provide medically-informed treatments and custom plans
                  designed to improve your skin health from the inside out.
                </span>
                <div className={styles.buttons}>
                  <Button
                    content="Book a consultation"
                    className="button_dark"
                  />
                  <Button
                    content="See all treatments"
                    className="button_light"
                  />
                </div>
              </div>
            </div>
            <img
              className={cn(styles.img, styles.img1)}
              src={homepageSlider1}
              alt="slider1"
            />
          </div>
        </div>

        <div
          className={cn(styles.fadeSlide, {
            [styles.activeSlide]: animation === 2,
          })}
        >
          <div className={styles.homeSlider}>
            <div
              className={cn(styles.radianceBegin, styles.radianceBegin_right)}
            >
              <img
                className={cn(styles.img, styles.img2)}
                src={homepageSlider2}
                alt="slider2"
              />

              <div
                className={cn(styles.titleWrapper, styles.titleWrapper_right)}
              >
                <img src={TitleSVG} alt="Title" />
                <span className={cn(styles.subTitle, "spectral-regular")}>
                  Advanced Skincare Backed by Science
                </span>
              </div>
              <div
                className={cn(
                  styles.infoTextWrapper,
                  styles.infoTextWrapper_right
                )}
              >
                <span className={cn(styles.infoText, "poppins-regular")}>
                  We provide medically-informed treatments and custom plans
                  designed to improve your skin health from the inside out.
                </span>
                <div className={styles.buttons}>
                  <Button
                    content="Book a consultation"
                    className="button_dark"
                  />
                  <Button
                    content="See all treatments"
                    className="button_light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
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
    </>
  );
};
