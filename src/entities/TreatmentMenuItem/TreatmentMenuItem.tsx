import { type FC } from "react";

import cn from "classnames";
import styles from "./TreatmentMenuItem.module.css";

interface TreatmentProps {
  name: string;
  handleClick?: (name: string) => void;
}

export const TreatmentMenuItem: FC<TreatmentProps> = ({
  name,
  handleClick,
}) => {
  return (
    <div className={styles.treatment}>
      <button className={styles.btn} onMouseDown={() => handleClick?.(name)}>
        <span className={cn(styles.treatmentName, "poppins-regular")}>
          {name}
        </span>
      </button>
    </div>
  );
};
