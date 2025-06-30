import AllTreatmentsTitleBlock from "../../components/AllTreatmentsTitleBlock";
import styles from "./AllTreatments.module.css";
import AllTreatmentsFilter from "../../features/AllTreatmentsFilter";

export const AllTreatments = () => {
  return (
    <div className={styles.all_Tratments_page}>
      <AllTreatmentsTitleBlock />
      <AllTreatmentsFilter />
    </div>
  );
};
