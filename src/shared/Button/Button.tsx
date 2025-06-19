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
  console.log(className);

  return (
    <button className={cn(styles.button, styles[className], font)}>
      {content}
    </button>
  );
};
