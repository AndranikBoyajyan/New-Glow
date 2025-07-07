import { useState, useEffect, type FC } from "react";
import Checkbox from "../../../shared/Checkbox";
import styles from "./allTreatmentsFilters.module.css";
import { TREATMENTS_CATEGORIES } from "../../../constants/treatmentsCategories";

interface AllTreatmentsFiltersProps {
  allIds: number[];
  checkedCategoriesIds: number[];
  handleSetCategoriesIds: (categoriesIds: number[]) => void;
}

export const AllTreatmentsFilters: FC<AllTreatmentsFiltersProps> = ({
  allIds,
  checkedCategoriesIds,
  handleSetCategoriesIds,
}) => {
  const [allChecked, setAllChecked] = useState<boolean>(false);

  useEffect(() => {
    if (allIds.length === checkedCategoriesIds.length) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [allIds.length, checkedCategoriesIds, handleSetCategoriesIds]);

  const handleClick = (id: number) => {
    if (!checkedCategoriesIds.includes(id)) {
      handleSetCategoriesIds([...checkedCategoriesIds, id]);
    } else {
      handleSetCategoriesIds(
        checkedCategoriesIds.filter((categoryId) => categoryId !== id)
      );
    }
  };

  const handleAllCheckedClick = () => {
    setAllChecked(!allChecked);

    if (!allChecked) {
      handleSetCategoriesIds(
        TREATMENTS_CATEGORIES.map((category) => category.id)
      );
    }
  };

  return (
    <div className={styles.allTreatmentsFiltersWrapper}>
      <div className={styles.allTreatmentsFilters}>
        {TREATMENTS_CATEGORIES.map((treatmentCategory) => (
          <Checkbox
            key={treatmentCategory.id}
            text={treatmentCategory.name}
            font="poppins-regular"
            checked={
              allChecked || checkedCategoriesIds.includes(treatmentCategory.id)
            }
            labelClassName={"label_20"}
            handleClick={() => handleClick(treatmentCategory.id)}
          />
        ))}
        <Checkbox
          text="Select All"
          font="poppins-italic"
          checked={allChecked}
          checkboxClassName={"selectAll"}
          labelClassName={"label_16"}
          handleClick={handleAllCheckedClick}
        />
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};
