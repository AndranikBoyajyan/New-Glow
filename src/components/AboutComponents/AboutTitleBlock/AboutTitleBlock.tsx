import cn from "classnames";

import styles from "./AboutTitleBlock.module.css";
import Title from "../../../shared/Title";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {
  MEDIA_TABLET,
  MEDIA_TABLET_LARGE,
  MEDIA_TABLET_SMALL,
} from "../../../constants/windowSizes";

export const AboutTitleBlock = () => {
  const { width } = useWindowSize();

  const isTabletLarge = width < MEDIA_TABLET_LARGE;
  const isTabletSmall = width < MEDIA_TABLET;
  const isMobile = width < MEDIA_TABLET_SMALL;

  const getTitleClassName = () => {
    if (isTabletLarge) return "title_h1_72";
    if (isTabletSmall) return "title_h1_60";
    if (isMobile) return "title_h1_36";

    return "title_h1_120";
  };

  return (
    <div className={styles.titleBlock}>
      <div className={styles.titleWrapper}>
        <Title text="About us" className={getTitleClassName()} isH1 />
      </div>
      <div className={styles.topSideContent}>
        <div className={styles.descriptionWrapper}>
          <span className={cn(styles.description, "poppins-light")}>
            At NewGlow Aesthetic Medical Clinic, we believe that true beauty
            begins with confidence. Our mission is to enhance your natural
            radiance through advanced, personalized aesthetic treatments
            performed in a safe, serene, and welcoming environment.
          </span>
        </div>
      </div>
    </div>
  );
};
