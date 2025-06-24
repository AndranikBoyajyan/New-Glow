import type { FC } from "react";
import cn from "classnames";
import styles from "./TreatmentCard.module.css";

interface TreatmentCardProps {
  name: string;
  imgUrl: string;
  description: string;
  duration: string;
  price: string;
}

export const TreatmentCard: FC<TreatmentCardProps> = ({
  name,
  imgUrl,
  description,
}) => {
  return (
    <div>
      <img src={imgUrl} alt={name} className={styles.img} />
      <span className={cn(styles.name, "poppins-extralight")}>{name}</span>
      <span className={cn(styles.description, "poppins-regular")}>
        {description}
      </span>
    </div>
  );
};
