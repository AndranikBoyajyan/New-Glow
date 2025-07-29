import type { FC } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  content: string;
  className: string;
  slideIndex?: number;
  isActive?: boolean;
  font?: string;
  isSliderBgDark?: boolean;
  handleClick?: (index?: number) => void;
}

export const Button: FC<ButtonProps> = ({
  content,
  className,
  slideIndex,
  isActive,
  font = "poppins-medium",
  isSliderBgDark,
  handleClick,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick?.(slideIndex);
      }}
      className={cn(styles.button, styles[className], font, {
        [styles.active]: isActive,
        [styles.slider_button_light]: isSliderBgDark,
        [styles.active_light]: isSliderBgDark && isActive,
      })}
    >
      {content.toUpperCase()}
    </button>
  );
};
