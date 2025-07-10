import type { FC } from "react";
import cn from "classnames";
import styles from "./SingleTreatmentDescription.module.css";

interface SingleTreatmentDescriptionProps {
  description: string;
}

export const SingleTreatmentDescription: FC<
  SingleTreatmentDescriptionProps
> = ({ description }) => {
  return (
    <div className={styles.singleTreatmentDescriptionWrapper}>
      <span
        className={cn(styles.singleTreatmentDescription, "poppins-regular")}
      >
        {description}
      </span>
    </div>
  );
};
