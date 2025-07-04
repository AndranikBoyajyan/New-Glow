import type { FC } from "react";

import cn from "classnames";

import styles from "./Title.module.css";

interface TitleProps {
  text: string;
  className?: string;
  font?: string;
  isH1?: boolean;
}

export const Title: FC<TitleProps> = ({
  text,
  font = "dm-serif-display-regular",
  className,
  isH1,
}) => {


  if (isH1)
    return (
      <h1 className={cn(styles.title, styles[className ?? ""], font)}>
        {text.toUpperCase()}
      </h1>
    );
  return (
    <h2 className={cn(styles.title, styles[className ?? ""], font)}>
      {text.toUpperCase()}
    </h2>
  );
};
