import Treatment from "../../entities/Treatment";
import cn from "classnames";

import styles from "./Treatments.module.css";
import { TREATMENTS } from "../../constants/treatments";

export const Treatments = () => {
  return (
    <div className={styles.treatments}>
      {TREATMENTS.map((treatment) => (
        <Treatment key={treatment.id} name={treatment.name} />
      ))}
      <span className={cn(styles.span, "poppins-medium-italic")}>See All</span>
    </div>
  );
};
