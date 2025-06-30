import type { FC } from "react";
import cn from "classnames";
import styles from "./homeTreatmentCard.module.css";
import { Button } from "../../shared/Button/Button";
import type { ITreatmentCategory } from "../../types/global.types";

interface HomeTreatmentCardProps {
  name: string;
  imgUrl: string;
  isMobile?: boolean;
  treatmentCategories?: ITreatmentCategory[];
  activeTreatment?: number;
  setActiveTreatment?: (id: number) => void;
}

export const HomeTreatmentCard: FC<HomeTreatmentCardProps> = ({
  name,
  imgUrl,
  isMobile,
  treatmentCategories,
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
      {isMobile && treatmentCategories && (
        <div className={styles.sliderButtons}>
          {treatmentCategories.map((category) => (
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
