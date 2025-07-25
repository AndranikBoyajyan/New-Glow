import type { FC } from "react";
import cn from "classnames";
import type { ILaserPageTreatmentCardList } from "../../types/global.types";
import Button from "../../shared/Button";
import styles from "./laserPageTreatmentCard.module.css";

interface LaserPageTreatmentCardProps {
  BodyPartList: ILaserPageTreatmentCardList[];
  imgUrl: string;
}

export const LaserPageTreatmentCard: FC<LaserPageTreatmentCardProps> = ({
  BodyPartList,
  imgUrl,
}) => {
  return (
    <div className={styles.laserPageTreatmentCard}>
      <div
        className={styles.imgBlock}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className={styles.textBlockAndButton}>
        <div className={styles.textBlock}>
          {BodyPartList.map((treatmentType) => (
            <div key={treatmentType.id} className={styles.eachTreatmentType}>
              <span className={cn(styles.txt, "poppins-light")}>
                {treatmentType.name}
              </span>
              <div className={styles.durationAndPriceBlock}>
                <span className={cn(styles.txt, "poppins-italic")}>
                  {treatmentType.duration}
                </span>
                <span className={cn(styles.txt, "poppins-italic")}>
                  {treatmentType.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button content="BOOK NOW" className="button_light_transparent" />
        </div>
      </div>
    </div>
  );
};
