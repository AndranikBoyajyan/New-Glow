import TreatmentCard from "../../entities/TreatmentCard";
import { treatments } from "../Treatments/constants/treatments";
import styles from "./TreatmentCards.module.css";

export const TreatmentCards = () => {
  return (
    <div className={styles.cards}>
      {treatments.map((treatment) => (
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
