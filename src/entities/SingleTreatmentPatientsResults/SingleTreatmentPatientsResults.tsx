import Title from "../../shared/Title";
import cn from "classnames";
import styles from "./SingleTreatmentPatientsResults.module.css";
import type { FC } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";

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
  const { width } = useWindowSize();
  const { firstName } = props;

  const isMobile = width < MEDIA_TABLET_SMALL;

  return (
    <div className={styles.patientsResults}>
      <Title
        text="Our patient's results"
        font="fjalla-one-regular"
        className={isMobile ? "title_20" : ""}
      />
      <div className={styles.patientsResultsContent}>
        <div className={cn(styles.treatmentResult, styles.result1)}>
          <div className={styles.imgs}>
            <div className={cn(styles.beforeImg1, styles.img)}>
              <div className={styles.beforeTextWrapper}>
                <span
                  className={cn(
                    styles.text,
                    styles.before1,
                    "fjalla-one-regular"
                  )}
                >
                  Before
                </span>
              </div>
            </div>
            <div className={cn(styles.afterImg1, styles.img)}>
              <div className={styles.afterTextWrapper}>
                <span
                  className={cn(
                    styles.text,
                    styles.after1,
                    "fjalla-one-regular"
                  )}
                >
                  After
                </span>
              </div>
            </div>
          </div>
          <span className={cn(styles.treatmentName, "poppins-semibold")}>
            {firstName}
          </span>
        </div>
        {!isMobile && (
          <div className={cn(styles.treatmentResult, styles.result2)}>
            <div className={styles.imgs}>
              <div className={cn(styles.beforeImg2, styles.img)}></div>
              <div className={cn(styles.afterImg2, styles.img)}></div>
            </div>
            <span className={cn(styles.treatmentName, "poppins-semibold")}>
              Hydro facial
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
