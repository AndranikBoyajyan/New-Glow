import type { FC } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  content: string;
  className: string;
  font?: string;
}

export const Button: FC<ButtonProps> = ({
  content,
  className,
  font = "poppins-medium",
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
      }}
      className={cn(styles.button, styles[className], font)}
    >
      {content}
    </button>
  );
};
