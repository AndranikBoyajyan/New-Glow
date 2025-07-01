import type { FC } from "react";
import Title from "../../shared/Title";
import cn from "classnames";
import styles from "./AboutPageCard.module.css";

interface AboutPageCardProps {
  img: string;
  name: string;
  profession: string;
  description: string;
}

export const AboutPageCard: FC<AboutPageCardProps> = ({
  img,
  name,
  profession,
  description,
}) => {
  return (
    <div className={styles.aboutPageCard}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.textWrapper}>
        <Title text={name} className="title_textColor" />
        <Title text={profession} className="title_32" />
        <span className={cn(styles.description, "poppins-regular")}>
          {description}
        </span>
      </div>
    </div>
  );
};
