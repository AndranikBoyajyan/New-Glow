import type { FC } from "react";
import cn from "classnames";
import styles from "./homeTreatmentCard.module.css";
import { Button } from "../../shared/Button/Button";
import { TREATMENTS_CATEGORIES } from "../../constants/treatmentsCategories";

interface HomeTreatmentCardProps {
  name: string;
  imgUrl: string;
  isMobile?: boolean;
  activeTreatment?: number;
  setActiveTreatment?: (id: number) => void;
}

export const HomeTreatmentCard: FC<HomeTreatmentCardProps> = ({
  name,
  imgUrl,
  isMobile,
  activeTreatment,
  setActiveTreatment,
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
            content="LEARN MORE"
            className="button_weight_2"
            font="poppins-medium"
          />
        </div>
      </div>
      {isMobile && (
        <div className={styles.sliderButtons}>
          {TREATMENTS_CATEGORIES.map((category) => (
            <Button
              key={category.id}
              className="slider_button"
              isActive={activeTreatment === category.id}
              content=""
              handleClick={() => setActiveTreatment?.(category.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
