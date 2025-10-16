import bgMobilePng from "/webpImages/headerMobileImg.webp";
import cn from "classnames";

import styles from "./SingleTreatmentHeaderMobile.module.css";

interface SingleTreatmentHeaderMobileProps {
  imgUrl: string;
  isLaserPage?: boolean;
  isBotoxPage?: boolean;
  isFacialsPage?: boolean;
}

export const SingleTreatmentHeaderMobile = ({
  imgUrl,
  isLaserPage,
  isBotoxPage,
  isFacialsPage,
}: SingleTreatmentHeaderMobileProps) => {
  return (
    <div className={styles.headerMobileWrapper}>
      <div
        className={styles.headerMobileBgImage}
        style={{
          backgroundImage: `url(${bgMobilePng})`,
        }}
      ></div>
      <div
        className={cn(styles.treatmentImg, {
          [styles.laserPageTreatmentImg]: isLaserPage,
          [styles.botoxPageTreatmentImg]: isBotoxPage,
          [styles.facialsPageTreatmentImg]: isFacialsPage,
        })}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};
