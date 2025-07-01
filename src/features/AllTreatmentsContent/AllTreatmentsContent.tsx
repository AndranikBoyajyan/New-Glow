import styles from "./allTreatmentsContent.module.css";
import AllTreatmentsFilters from "./AllTreatmentsFilters";
import Content from "./Content";
import { TREATMENTS_CATEGORIES } from "../../constants/treatmentsCategories";
import type { ITreatmentCategory } from "../../types/global.types";
import { useState } from "react";

export const AllTreatmentsContent = () => {
  const [treatmentCategory, setTreatmentCategory] = useState<
    ITreatmentCategory[]
  >(TREATMENTS_CATEGORIES);
  return (
    <div className={styles.all_treatments_content}>
      <AllTreatmentsFilters
        categories={treatmentCategory}
        setTreatmentCategory={setTreatmentCategory}
      />
      <Content />
    </div>
  );
};
