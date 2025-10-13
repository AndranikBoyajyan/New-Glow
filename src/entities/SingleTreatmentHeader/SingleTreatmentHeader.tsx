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
import SingleTreatmentHeaderMobile from "./SignleTreatmentHeaderMobile";

interface SingleTreatmentHeaderProps {
  title: string;
  imgUrl: string;
  isLaserPage?: boolean;
  isFacialsPage?: boolean;
  isFacialCont?: boolean;
  isBotoxPage?: boolean;
}

export const SingleTreatmentHeader: FC<SingleTreatmentHeaderProps> = ({
  title,
  imgUrl,
  isLaserPage,
  isFacialsPage,
  isFacialCont,
  isBotoxPage,
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

  const isReverseContent = isLaserPage || isFacialsPage || isFacialCont;

  return (
    <>
      {!isMobile ? (
        <div
          className={cn(styles.singleTreatmentHeader, {
            [styles.singleTreatmentHeaderBackGroundImg]: !isMobile,
          })}
        >
          <div
            className={cn(styles.singleTreatmentHeaderContent, {
              [styles.reverseContent]: isReverseContent,
            })}
          >
            <div
              className={cn(styles.singleTreatmentHeaderTitle, {
                [styles.reverseTitle]: isReverseContent,
              })}
            >
              <Title text={title} className={getTitleClassName()} isH1 />
            </div>
            <div
              className={cn(styles.singleTreatmentHeaderImage, {
                [styles.laserPageHeaderImage]: isLaserPage,
              })}
              style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
          </div>
        </div>
      ) : (
        <SingleTreatmentHeaderMobile
          imgUrl={imgUrl}
          isLaserPage={isLaserPage}
          isBotoxPage={isBotoxPage}
        />
      )}
    </>
  );
};
