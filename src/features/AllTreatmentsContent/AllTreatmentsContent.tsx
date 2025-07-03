import styles from "./allTreatmentsContent.module.css";
import AllTreatmentsFilters from "./AllTreatmentsFilters";
import TreatmentsContent from "./TreatmentsContent";
import { TREATMENTS_CATEGORIES } from "../../constants/treatmentsCategories";
import { useState } from "react";

export const AllTreatmentsContent = () => {
  const allIds = TREATMENTS_CATEGORIES.map((category) => category.id);

  const [checkedCategoriesIds, setCheckedCategoriesIds] =
    useState<number[]>(allIds);

  const handleSetCategoriesIds = (categoriesIds: number[]) => {
    setCheckedCategoriesIds(categoriesIds);
  };

  return (
    <div className={styles.all_treatments_content}>
      <AllTreatmentsFilters
        allIds={allIds}
        checkedCategoriesIds={checkedCategoriesIds}
        handleSetCategoriesIds={handleSetCategoriesIds}
      />
      {TREATMENTS_CATEGORIES.map((category) => (
        <TreatmentsContent
          key={category.id}
          category={category}
          isChecked={checkedCategoriesIds.includes(category.id)}
        />
      ))}
    </div>
  );
};
