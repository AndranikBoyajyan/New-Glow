import type { FC } from "react";

import cn from "classnames";

import styles from "./Title.module.css";

interface TitleProps {
  text: string;
  className: string;
  font?: string;
}

export const Title: FC<TitleProps> = ({ text, font, className }) => {
  return <h2 className={cn(styles.title, styles[className], font)}>{text}</h2>;
};
