import type { FC } from "react";
import cn from "classnames";
import styles from "./SingleTreatmentDescription.module.css";
import Title from "../../shared/Title";

interface SingleTreatmentDescriptionProps {
  description: string;
  title?: string;
}

export const SingleTreatmentDescription: FC<
  SingleTreatmentDescriptionProps
> = ({ description, title }) => {
  const descriptionParts = description.split(".");
  descriptionParts.pop();

  return (
    <div className={styles.singleTreatmentDescriptionWrapper}>
      {title && <Title text={title} className="title_32" />}
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
