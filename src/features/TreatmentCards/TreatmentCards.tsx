import TreatmentCard from "../../entities/TreatmentCard";
import { TREATMENTS } from "../../constants/treatments";
import styles from "./TreatmentCards.module.css";

export const TreatmentCards = () => {
  return (
    <div className={styles.cards}>
      {TREATMENTS.map((treatment) => (
        <TreatmentCard
          key={treatment.id}
          name={treatment.name}
          imgUrl={treatment.imgUrl ?? ""}
          description={treatment.description ?? ""}
        />
      ))}
    </div>
  );
};
