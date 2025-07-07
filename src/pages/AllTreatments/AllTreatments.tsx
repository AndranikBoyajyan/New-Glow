import AllTreatmentsContentWrapper from "../../components/AllTreatmentsContentWrapper";
import AllTreatmentsTitleBlock from "../../components/AllTreatmentsTitleBlock";
import styles from "./AllTreatments.module.css";

export const AllTreatments = () => {
  return (
    <div className={styles.allTreatmentsPage}>
      <AllTreatmentsTitleBlock />
      <AllTreatmentsContentWrapper />
    </div>
  );
};
