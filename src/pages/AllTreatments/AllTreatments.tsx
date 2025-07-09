import AllTreatmentsContentWrapper from "../../components/AllTreatmentsComponents/AllTreatmentsContentWrapper";
import AllTreatmentsTitleBlock from "../../components/AllTreatmentsComponents/AllTreatmentsTitleBlock";
import styles from "./AllTreatments.module.css";

export const AllTreatments = () => {
  return (
    <div className={styles.allTreatmentsPage}>
      <AllTreatmentsTitleBlock />
      <AllTreatmentsContentWrapper />
    </div>
  );
};
