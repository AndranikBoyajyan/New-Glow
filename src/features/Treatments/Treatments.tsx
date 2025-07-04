import Treatment from "../../entities/Treatment";
import cn from "classnames";

import styles from "./Treatments.module.css";
import { TREATMENTS } from "../../constants/treatments";
import { Link } from "react-router";
import type { FC } from "react";

interface TreatmentsProps {
  handleBlur: () => void;
}

export const Treatments: FC<TreatmentsProps> = ({ handleBlur }) => {
  return (
    <div
      role="menu"
      tabIndex={0}
      className={styles.treatments}
      onBlur={() => handleBlur()}
    >
      {TREATMENTS.map((treatment) => (
        <Treatment key={treatment.id} name={treatment.name} />
      ))}
      <Link
        to="/all-treatments"
        className={cn(styles.seeAll, "poppins-medium-italic")}
        style={{ textDecoration: "none" }}
      >
        See All
      </Link>
    </div>
  );
};
