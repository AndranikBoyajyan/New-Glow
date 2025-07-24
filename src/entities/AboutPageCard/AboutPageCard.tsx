import type { FC } from "react";
import Title from "../../shared/Title";
import cn from "classnames";
import styles from "./AboutPageCard.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  MEDIA_TABLET,
  MEDIA_TABLET_LARGE,
  MEDIA_TABLET_SMALL,
} from "../../constants/windowSizes";

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
  const { width } = useWindowSize();

  const isTabletLarge = width < MEDIA_TABLET_LARGE;
  const isTabletSmall = width < MEDIA_TABLET;
  const isMobile = width < MEDIA_TABLET_SMALL;

  const getTitleClassName = () => {
    if (isMobile) return "title_textColor_24";
    if (isTabletSmall) return "title_textColor_30";
    if (isTabletLarge) return "title_textColor_36";

    return "title_textColor";
  };

  const getDescriptionClassName = () => {
    if (isMobile) return "title_20";
    if (isTabletSmall) return "title_24";
    if (isTabletLarge) return "title_28";

    return "title_32";
  };

  return (
    <div className={styles.aboutPageCard}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.textWrapper}>
        <Title text={name} className={getTitleClassName()} />
        <Title text={profession} className={getDescriptionClassName()} />
        <span className={cn(styles.description, "poppins-regular")}>
          {description}
        </span>
      </div>
    </div>
  );
};
