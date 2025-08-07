import {
  MEDIA_TABLET,
  MEDIA_TABLET_LARGE,
  MEDIA_TABLET_SMALL,
} from "../../../constants/windowSizes";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Title from "../../../shared/Title";
import styles from "./AllTreatmentsTitleBlock.module.css";

export const AllTreatmentsTitleBlock = () => {
  const { width } = useWindowSize();

  const isTabletLarge = width <= MEDIA_TABLET_LARGE;
  const isTabletSmall = width <= MEDIA_TABLET;
  const isMobile = width <= MEDIA_TABLET_SMALL;

  const getTitleClassName = () => {
    if (isMobile) return "title_h1_40";
    if (isTabletSmall) return "title_h1_60";
    if (isTabletLarge) return "title_h1_72";

    return "title_h1_82";
  };

  return (
    <div className={styles.title_block}>
      <div className={styles.title_image}></div>
      <div className={styles.title_text_block}>
        <Title text="ALL TREATMENTS" className={getTitleClassName()} isH1 />
      </div>
    </div>
  );
};
