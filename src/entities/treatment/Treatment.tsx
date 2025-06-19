import type { FC } from "react";

import cn from "classnames";
import styles from "./Treatment.module.css";

interface TreatmentProps {
  name: string;
}

export const Treatment: FC<TreatmentProps> = ({ name }) => {
  return (
    <div className={styles.treatment}>
      <span className={cn(styles.treatmentName, "poppins-regular")}>
        {name}
      </span>
    </div>
  );
};
