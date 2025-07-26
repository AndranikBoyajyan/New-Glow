import type { FC } from "react";
import cn from "classnames";
import styles from "./SingleTreatmentDescription.module.css";

interface SingleTreatmentDescriptionProps {
  description: string;
}

export const SingleTreatmentDescription: FC<
  SingleTreatmentDescriptionProps
> = ({ description }) => {
  const descriptionParts = description.split(".");
  descriptionParts.pop();

  return (
    <div className={styles.singleTreatmentDescriptionWrapper}>
      {descriptionParts.map((descriptionPart) => (
        <span
          key={descriptionPart}
          className={cn(styles.singleTreatmentDescription, "poppins-regular")}
        >
          {descriptionPart}
        </span>
      ))}
    </div>
  );
};
