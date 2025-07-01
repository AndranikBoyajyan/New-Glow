import { useState, type FC } from "react";
import Checkbox from "../../../shared/Checkbox";
import styles from "./allTreatmentsFilters.module.css";
import type { ITreatmentCategory } from "../../../types/global.types";

interface AllTreatmentsFiltersProps {
  categories: ITreatmentCategory[];
  setTreatmentCategory: React.Dispatch<
    React.SetStateAction<ITreatmentCategory[]>
  >;
}
export const AllTreatmentsFilters: FC<AllTreatmentsFiltersProps> = ({
  categories,
  setTreatmentCategory,
}) => {
  const [allChecked, setAllchecked] = useState(false);
  const handleClick = (name: string) => {
    console.log("name :", name);
  };
  const handleAllCheckedClick = () => {
    setAllchecked(!allChecked);
  };
  return (
    <div className={styles.all_treatments_filters}>
      {categories.map((treatmentCategory) => (
        <Checkbox
          key={treatmentCategory.id}
          text={treatmentCategory.name}
          font="poppins-regular"
          handleClick={() => handleClick(treatmentCategory.name)}
        />
      ))}
      <Checkbox
        text="Select All"
        font="poppins-italic"
        handleClick={handleAllCheckedClick}
      />
    </div>
  );
};
