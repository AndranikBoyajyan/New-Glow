import type { FC } from "react";
import TreatmentCard from "../../../entities/TreatmentCard";
import Title from "../../../shared/Title";
import type { ITreatmentCategory } from "../../../types/global.types";
import styles from "./TreatmentsContent.module.css";

interface TreatmentsContentProps {
  isChecked: boolean;
  category: ITreatmentCategory;
}

export const TreatmentsContent: FC<TreatmentsContentProps> = ({
  isChecked,
  category,
}) => {
  if (!isChecked) return null;

  return (
    <div className={styles.content}>
      <Title text={category.name} font="fjalla-one-regular" />
      {category.treatments.map((treatment) => (
        <TreatmentCard
          key={treatment.id}
          name={treatment.name}
          imgUrl={treatment.imgUrl}
          description={treatment.description}
        />
      ))}
    </div>
  );
};
