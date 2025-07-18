import Title from "../../shared/Title";
import cn from "classnames";
import type { FC } from "react";
import styles from "./SingleTreatmentHeader.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";

interface SingleTreatmentHeaderProps {
  title: string;
  imgUrl: string;
}

export const SingleTreatmentHeader: FC<SingleTreatmentHeaderProps> = ({
  title,
  imgUrl,
}) => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div
      className={cn(
        styles.singleTreatmentHeader,
        styles.singleTreatmentHeaderBackGroundImg
      )}
    >
      <div className={styles.singleTreatmentHeaderContent}>
        {!isMobile && (
          <div className={styles.singleTreatmentHeaderTitle}>
            <Title text={title} className={"title_h1_86"} isH1 />
          </div>
        )}
        <div
          className={styles.singleTreatmentHeaderImage}
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};
