import AllTreatmentsContentWrapper from "../../components/AllTreatmentsContentWrapper";
import AllTreatmentsTitleBlock from "../../components/AllTreatmentsTitleBlock";
import Menu from "../../components/Menu";
import styles from "./AllTreatments.module.css";

export const AllTreatments = () => {
  return (
    <div className={styles.allTreatmentsPage}>
      <Menu />
      <AllTreatmentsTitleBlock />
      <AllTreatmentsContentWrapper />
    </div>
  );
};
