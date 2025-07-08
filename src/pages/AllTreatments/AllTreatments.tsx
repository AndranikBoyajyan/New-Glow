import AllTreatmentsContentWrapper from "../../components/AllTreatmentsContentWrapper";
import AllTreatmentsTitleBlock from "../../components/AllTreatmentsTitleBlock";
import styles from "./AllTreatments.module.css";
import LaserPageTreatmentCard from "../../entities/LaserPageTreatmentCard";
import { LASERTREATMENTBODYPARTSLIST } from "../../constants/laserPageTreatmentList";

export const AllTreatments = () => {
  return (
    <div className={styles.allTreatmentsPage}>
      <AllTreatmentsTitleBlock />
      <LaserPageTreatmentCard
        list={LASERTREATMENTBODYPARTSLIST[0].bodyParts}
        imgUrl={LASERTREATMENTBODYPARTSLIST[0].imgUrl}
      />
      <AllTreatmentsContentWrapper />
    </div>
  );
};
