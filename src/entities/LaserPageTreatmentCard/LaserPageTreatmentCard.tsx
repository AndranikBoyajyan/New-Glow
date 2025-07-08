import type { FC } from "react";
import type { ILaserPageTreatmentCardList } from "../../types/global.types";
import styles from "./laserPageTreatmentCard.module.css";
import Button from "../../shared/Button";

interface LaserPageTreatmentCardProps {
  list: ILaserPageTreatmentCardList[];
  imgUrl: string;
}

export const LaserPageTreatmentCard: FC<LaserPageTreatmentCardProps> = ({
  list,
  imgUrl,
}) => {
  return (
    <div
      className={styles.LaserPageTreatmentCard}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className={styles.textBlock}>
        {list.map((treatmentType) => (
          <div key={treatmentType.id} className={styles.eachTreatmentType}>
            <div>{treatmentType.name}</div>
            <div className={styles.durationAndPriceBlock}>
              <div>{treatmentType.duration}</div>
              <div>{treatmentType.price}</div>
            </div>
          </div>
        ))}
        <div className={styles.buttonWrapper}>
          <Button content="BOOK NOW" className="button_light_transparent" />
        </div>
      </div>
    </div>
  );
};
