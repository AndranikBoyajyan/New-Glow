import type { FC } from "react";

import cn from "classnames";
import styles from "./Treatment.module.css";
import { Link } from "react-router";

interface TreatmentProps {
  name: string;
}

export const Treatment: FC<TreatmentProps> = ({ name }) => {
  const urlParamsName = name.replaceAll(" ", "-").toLowerCase();
  return (
    <div className={styles.treatment}>
      <Link
        to={urlParamsName}
        className={cn(styles.treatmentName, "poppins-regular")}
      >
        {name}
      </Link>
    </div>
  );
};
