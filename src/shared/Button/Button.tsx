import type { FC } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  content: string;
  className: string;
  isActive?: boolean;
  font?: string;
  handleClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  content,
  className,
  isActive,
  font = "poppins-medium",
  handleClick,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClick?.();
      }}
      className={cn(styles.button, styles[className], font, {
        [styles.active]: isActive,
      })}
    >
      {content}
    </button>
  );
};
