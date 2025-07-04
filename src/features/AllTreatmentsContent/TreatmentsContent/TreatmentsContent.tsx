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
  const { treatments, name: categoryName } = category;

  if (!isChecked) return null;

  return (
    <div className={styles.content}>
      <Title
        text={categoryName}
        font="fjalla-one-regular"
        className="title_40"
      />
      <div>
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={treatment.id}
            name={treatment.name}
            imgUrl={treatment.imgUrl}
            description={treatment.description}
            isRight={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};
