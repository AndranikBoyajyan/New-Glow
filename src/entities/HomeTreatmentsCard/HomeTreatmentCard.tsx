import type { FC } from "react";
import cn from "classnames";
import styles from "./homeTreatmentCard.module.css";
import { Button } from "../../shared/Button/Button";

interface HomeTreatmentCardProps {
  name: string;
  imgUrl: string;
}

export const HomeTreatmentCard: FC<HomeTreatmentCardProps> = ({
  name,
  imgUrl,
}) => {
  console.log({ name, imgUrl });

  return (
    <div className={styles.home_treatment_card}>
      <img src={imgUrl} alt={name} className={styles.img} />
      <div className={styles.treatment_name_and_button}>
        <span className={cn(styles.treatment_name, "poppins-regular")}>
          {name}
        </span>
        <Button
          content="LEARN MORE"
          className="learn_more_button"
          font="poppins-medium"
        />
      </div>
    </div>
  );
};
