import AllTreatmentsContentWrapper from "../../components/AllTreatmentsContentWrapper";
import AllTreatmentsTitleBlock from "../../components/AllTreatmentsTitleBlock";
import styles from "./AllTreatments.module.css";
import LaserTreatments from "../../features/LaserTreatments";
export const AllTreatments = () => {
  return (
    <div className={styles.allTreatmentsPage}>
      <AllTreatmentsTitleBlock />
      <LaserTreatments />
      <AllTreatmentsContentWrapper />
    </div>
  );
};
