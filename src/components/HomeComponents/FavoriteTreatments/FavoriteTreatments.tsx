import FavoriteTreatmentsDescription from "../../../entities/FavoriteTreatmentsDescription";
import { favoriteTreatments } from "./constants/favoriteTreatments";
import styles from "./FavoriteTreatments.module.css";
import SingleFavoriteTreatment from "./SingleFavoriteTreatment";

export const FavoriteTreatments = () => {
  return (
    <div className={styles.favoriteTreatments}>
      <FavoriteTreatmentsDescription />
      <div className={styles.imgs}>
        {favoriteTreatments.map((treatment) => (
          <SingleFavoriteTreatment key={treatment.id} treatment={treatment} />
        ))}
      </div>
    </div>
  );
};
