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
  return (
    <div
      className={styles.home_treatment_card}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className={styles.treatment_name_and_button}>
        <span className={cn(styles.treatment_name, "poppins-medium")}>
          {name.toUpperCase()}
        </span>
        <div className={styles.buttonWrapper}>
          <Button
            content="Learn more"
            className="button_weight_2"
            font="poppins-medium"
          />
        </div>
      </div>
    </div>
  );
};
