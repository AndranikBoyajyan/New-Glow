import type { FC } from "react";
import cn from "classnames";
import styles from "./TreatmentCard.module.css";

interface TreatmentCardProps {
  name: string;
  imgUrl: string;
  description: string;
}

export const TreatmentCard: FC<TreatmentCardProps> = ({
  name,
  imgUrl,
  description,
}) => {
  return (
    <div className={styles.treatment_card_left}>
      <img src={imgUrl} alt={name} className={styles.img} />
      <div className={styles.name_and_dscription_block}>
        <div className={cn(styles.name, "poppins-extralight")}>{name}</div>
        <span className={cn(styles.description, "poppins-regular")}>
          {description}
        </span>
      </div>
    </div>
  );
};
