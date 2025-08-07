import Title from "../../shared/Title";
import cn from "classnames";
import type { FC } from "react";
import styles from "./SingleTreatmentHeader.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import {
  MEDIA_TABLET,
  MEDIA_TABLET_LARGE,
  MEDIA_TABLET_SMALL,
} from "../../constants/windowSizes";

interface SingleTreatmentHeaderProps {
  title: string;
  imgUrl: string;
  isLaserPage?: boolean;
}

export const SingleTreatmentHeader: FC<SingleTreatmentHeaderProps> = ({
  title,
  imgUrl,
  isLaserPage,
}) => {
  const { width } = useWindowSize();

  const isTabletLarge = width <= MEDIA_TABLET_LARGE;
  const isTabletSmall = width <= MEDIA_TABLET;
  const isMobile = width < MEDIA_TABLET_SMALL;

  const getTitleClassName = () => {
    if (isMobile) return "title_h1_36";
    if (isTabletSmall) return "title_h1_60";
    if (isTabletLarge) return "title_h1_72";

    return "title_h1_86";
  };
  return (
    <div
      className={cn(styles.singleTreatmentHeader, {
        [styles.singleTreatmentHeaderBackGroundImg]: !isMobile,
      })}
    >
      <div className={styles.singleTreatmentHeaderContent}>
        {!isMobile && (
          <div className={styles.singleTreatmentHeaderTitle}>
            <Title text={title} className={getTitleClassName()} isH1 />
          </div>
        )}
        <div
          className={cn(styles.singleTreatmentHeaderImage, {
            [styles.laserPageHeaderImage]: isLaserPage,
          })}
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
    </div>
  );
};
