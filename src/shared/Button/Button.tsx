import type { FC } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  content: string;
  className: string;
  slideIndex?: number;
  isActive?: boolean;
  font?: string;
  handleClick?: (index?: number) => void;
}

export const Button: FC<ButtonProps> = ({
  content,
  className,
  slideIndex,
  isActive,
  font = "poppins-medium",
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
      })}
    >
      {content.toUpperCase()}
    </button>
  );
};
