import styles from "./AllTreatmentsFilter.module.css";
import Checkbox from "../../shared/Checkbox";
import { TREATMENTS_CATEGORIES } from "../../constants/treatmentsCategories";
import type { ITreatmentCategory } from "../../types/global.types";
import { useState, useEffect } from "react";

export const AllTreatmentsFilter = () => {
  const [allChecked, setAllchecked] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<ITreatmentCategory[]>(
    TREATMENTS_CATEGORIES
  );

  useEffect(() => {
    const checkedCount = categoryData.filter(
      (category) => category.checked
    ).length;
    setAllchecked(checkedCount === categoryData.length);
  }, [categoryData]);

  const handleAllCheckedClick = () => {
    setCategoryData(
      categoryData.map((category) => ({
        ...category,
        checked: !allChecked,
      }))
    );
    setAllchecked(!allChecked);
  };

  const handleEachChecked = (id: number) => {
    setCategoryData(
      categoryData.map((category) => {
        if (category.id === id) {
          return { ...category, checked: !category.checked };
        }
        return category;
      })
    );
  };

  return (
    <div className={styles.all_treatments_filter}>
      {categoryData.map((treatmentCategory) => (
        <Checkbox
          key={treatmentCategory.id}
          text={treatmentCategory.name}
          font="poppins-regular"
          checked={treatmentCategory.checked}
          handleClick={() => handleEachChecked(treatmentCategory.id)}
        />
      ))}
      <Checkbox
        text="Select All"
        font="poppins-italic"
        checked={allChecked}
        handleClick={handleAllCheckedClick}
      />
    </div>
  );
};
