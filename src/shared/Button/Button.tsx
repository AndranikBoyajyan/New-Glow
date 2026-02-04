import type { BaseSyntheticEvent, FC } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  content: string;
  className: string;
  slideIndex?: number;
  isActive?: boolean;
  type?: "submit" | "reset" | "button";
  font?: string;
  isSliderBgDark?: boolean;
  handleClick?: (index?: number) => void;
  hookFormClick?: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
}

export const Button: FC<ButtonProps> = ({
  content,
  className,
  slideIndex,
  isActive,
  type,
  font = "poppins-medium",
  isSliderBgDark,
  handleClick,
  hookFormClick,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick?.(slideIndex);

        if (type === "submit") hookFormClick?.(e);
      }}
      className={cn(styles.button, styles[className], font, {
        [styles.active]: isActive,
        [styles.slider_button_light]: isSliderBgDark,
        [styles.active_light]: isSliderBgDark && isActive,
      })}
      type={type}
    >
      {content.toUpperCase()}
    </button>
  );
};
