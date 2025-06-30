import styles from "./AllTreatmentsFilter.module.css";
import Checkbox from "../../shared/Checkbox";
import { TREATMENTS_CATEGORIES } from "../../constants/treatmentsCategories";

export const AllTreatmentsFilter = () => {
  return (
    <div className={styles.all_treatments_filter}>
      {TREATMENTS_CATEGORIES.map((treatmentCategory) => (
        <Checkbox key={treatmentCategory.id} text={treatmentCategory.name} />
      ))}
      <Checkbox text="Select All" />
    </div>
  );
};
