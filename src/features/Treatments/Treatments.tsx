import Treatment from "../../entities/treatment";
import cn from "classnames";

import styles from "./Treatments.module.css";
import { treatments } from "./constants/treatments";

export const Treatments = () => {
  return (
    <div className={styles.treatments}>
      {treatments.map((treatment) => (
        <Treatment key={treatment.id} name={treatment.name} />
      ))}
      <span className={cn(styles.span, "poppins-medium-italic")}>See All</span>
    </div>
  );
};
