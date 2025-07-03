import styles from "./allTreatmentsContent.module.css";
import AllTreatmentsFilters from "./AllTreatmentsFilters";
import Content from "./Content";
import { TREATMENTS_CATEGORIES } from "../../constants/treatmentsCategories";
import { useState } from "react";

export const AllTreatmentsContent = () => {
  const [checkedCatidoiesIds, setCheckedCatidoiesIds] = useState<number[]>([]);

  const handleSetTreatments = (categoriesIds: number[]) => {
    setCheckedCatidoiesIds(categoriesIds);
  };

  return (
    <div className={styles.all_treatments_content}>
      <AllTreatmentsFilters
        categories={TREATMENTS_CATEGORIES}
        handleSetTreatments={handleSetTreatments}
      />
      <Content checkedCatidoiesIds={checkedCatidoiesIds} />
    </div>
  );
};
