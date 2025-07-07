import AllTreatmentsContentWraper from "../../components/AllTreatmentsContentWraper";
import AllTreatmentsTitleBlock from "../../components/AllTreatmentsTitleBlock";
import styles from "./AllTreatments.module.css";

export const AllTreatments = () => {
  return (
    <div className={styles.all_Tratments_page}>
      <AllTreatmentsTitleBlock />
      <AllTreatmentsContentWraper />
    </div>
  );
};
