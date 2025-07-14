import Title from "../../shared/Title";
import cn from "classnames";
import styles from "./SingleTreatmentPatientsResults.module.css";
import type { FC } from "react";

interface SingleTreatmentPatientsResultsProps {
  firstName: string;
  // beforeImg1: string;
  // afterImg1: string;
  // secondName: string;
  // beforeImg2: string;
  // afterImg2: string;
}
// TODO

export const SingleTreatmentPatientsResults: FC<
  SingleTreatmentPatientsResultsProps
> = (props) => {
  const { firstName } = props;

  return (
    <div className={styles.patientsResults}>
      <Title text="Our patient's results" font="fjalla-one-regular" />
      <div className={styles.patientsResultsContent}>
        <div className={styles.firstTreatmentResult}>
          <div className={styles.imgs}>
            <div className={styles.beforeImg1}></div>
            <div className={styles.afterImg1}></div>
          </div>
          <span className={cn(styles.treatmentName, "poppins-semibold")}>
            {firstName}
          </span>
        </div>
        <div className={styles.secondTreatmentResult}>
          <div className={styles.imgs}>
            <div className={styles.beforeImg2}></div>
            <div className={styles.afterImg2}></div>
          </div>
          <span className={cn(styles.treatmentName, "poppins-semibold")}>
            Hydro facial
          </span>
        </div>
      </div>
    </div>
  );
};
