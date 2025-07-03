import type { FC } from "react";
import styles from "./content.module.css";
import TreatmentCard from "../../../entities/TreatmentCard";
import { TREATMENTS } from "../../../constants/treatments";

interface ContentProps {
  checkedCatidoiesIds: number[];
}

export const Content: FC<ContentProps> = ({ checkedCatidoiesIds }) => {
  return (
    <div className={styles.content}>
      {TREATMENTS.map(
        (treatment) =>
          checkedCatidoiesIds.includes(treatment.categoryId) && (
            <TreatmentCard
              name={treatment.name}
              imgUrl={treatment.imgUrl}
              description={treatment.description}
            />
          )
      )}
    </div>
  );
};
