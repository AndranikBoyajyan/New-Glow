import { useState, useEffect, type FC } from "react";
import Checkbox from "../../../shared/Checkbox";
import styles from "./allTreatmentsFilters.module.css";
import type { ITreatmentCategory } from "../../../types/global.types";

interface AllTreatmentsFiltersProps {
  categories: ITreatmentCategory[];
  handleSetTreatments: (categoriesId: number[]) => void;
}
export const AllTreatmentsFilters: FC<AllTreatmentsFiltersProps> = ({
  categories,
  handleSetTreatments,
}) => {
  const [allChecked, setAllchecked] = useState<boolean>(false);
  const [checkedCategorysId, setCheckedCategorysId] = useState<number[]>([]);

  useEffect(() => {
    if (categories.length === checkedCategorysId.length) {
      setAllchecked(true);
    } else {
      setAllchecked(false);
    }
  }, [categories, checkedCategorysId]);

  const handleClick = (id: number) => {
    if (!checkedCategorysId.includes(id)) {
      setCheckedCategorysId([...checkedCategorysId, id]);
    } else {
      setCheckedCategorysId(checkedCategorysId.filter((item) => item !== id));
    }
  };

  const handleAllCheckedClick = () => {
    setAllchecked(!allChecked);
    if (allChecked) {
      setCheckedCategorysId([]);
    } else {
      setCheckedCategorysId(categories.map((category) => category.id));
    }
  };
  handleSetTreatments(checkedCategorysId);

  return (
    <div className={styles.all_treatments_filters}>
      {categories.map((treatmentCategory) => (
        <Checkbox
          key={treatmentCategory.id}
          text={treatmentCategory.name}
          font="poppins-regular"
          checked={
            (allChecked && true) ||
            checkedCategorysId.includes(treatmentCategory.id)
          }
          handleClick={() => handleClick(treatmentCategory.id)}
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
