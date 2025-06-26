import { TREATMENTS_CATEGORIES } from "../../constants/treatmentsCategories";
import HomeTreatmentCard from "../../entities/HomeTreatmentsCard";
import Title from "../../shared/Title";

import styles from "./HomeAllTreatments.module.css";

export const HomeAllTreatments = () => {
  return (
    <div className={styles.homeAllTreatments}>
      <div className={styles.titleWrapper}>
        <Title text="ALL TREATMENTS" font="fjalla-one-regular" />
      </div>
      <div className={styles.treatmentsContainer}>
        {TREATMENTS_CATEGORIES.map((treatmentCategory) => (
          <HomeTreatmentCard
            key={treatmentCategory.id}
            name={treatmentCategory.name}
            imgUrl={treatmentCategory.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};
