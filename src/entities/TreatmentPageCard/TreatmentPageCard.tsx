import type { FC } from "react";
import styles from "./TreatmentPageCard.module.css";
import Title from "../../shared/Title";
import Button from "../../shared/Button";

interface TreatmentPageCardProps {
  name: string;
  description: string;
  duration: string;
  price: string;
  imgUrl: string;
}

export const TreatmentPageCard: FC<TreatmentPageCardProps> = ({
  name,
  description,
  duration,
  price,
  imgUrl,
}) => {
  return (
    <div className={styles.treatmentPageCards}>
      <img src={imgUrl} alt="" />

      <div className={styles.textBlock}>
        <div className={styles.descriptionAndTitleBlock}>
          <Title text={name} className="title_28" />
          <div>{description}</div>
        </div>
        <div className={styles.priceAndButtonBlock}>
          <div className={styles.durationAndPriceBlock}>
            <span>{duration}</span>
            <span>{price}</span>
          </div>
          <Button content="BOOK NOW" className="button_light_transparent" />
        </div>
      </div>
    </div>
  );
};
