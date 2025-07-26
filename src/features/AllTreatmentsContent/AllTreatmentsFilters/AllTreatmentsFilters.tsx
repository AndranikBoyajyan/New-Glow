import { useState, useEffect, type FC } from "react";
import Checkbox from "../../../shared/Checkbox";
import styles from "./allTreatmentsFilters.module.css";
import { TREATMENTS_CATEGORIES } from "../../../constants/treatmentsCategories";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

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
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

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
            checkboxClassName={!isMobile ? "checkbox" : "hidden_input"}
            labelClassName={!isMobile ? "label_20" : "checkbox_label_button"}
            handleClick={() => handleClick(treatmentCategory.id)}
          />
        ))}
        <div className={styles.allSelectCheckboxWrapper}>
          <Checkbox
            text="Select All"
            font="poppins-italic"
            checked={allChecked}
            checkboxClassName={!isMobile ? "selectAll" : "hidden_input"}
            labelClassName={
              !isMobile ? "label_16" : "checkbox_label_button_selectAll"
            }
            handleClick={handleAllCheckedClick}
          />
        </div>
      </div>
      {!isMobile && <div className={styles.divider}></div>}
    </div>
  );
};
