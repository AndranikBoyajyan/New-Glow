import styles from "./laserTreatments.module.css";
import LaserPageTreatmentCard from "../../entities/LaserPageTreatmentCard";
import { LASERTREATMENTBODYPARTSLIST } from "./contants/laserPageTreatmentList";

export const LaserTreatments = () => {
  return (
    <div className={styles.laserTreatments}>
      {LASERTREATMENTBODYPARTSLIST.map((test) => (
        <LaserPageTreatmentCard
          BodyPartList={test.bodyParts}
          imgUrl={test.imgUrl}
          key={test.id}
        />
      ))}
    </div>
  );
};
