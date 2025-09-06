import { Link } from "react-router";
import FavoriteTreatmentsDescription from "../../../entities/FavoriteTreatmentsDescription";
import cn from "classnames";
import { favoriteTreatments } from "./constants/favoriteTreatments";
import styles from "./FavoriteTreatments.module.css";
import { getTreatmentPath } from "../../../helpers/getTreatmentPath";

export const FavoriteTreatments = () => {
  return (
    <div className={styles.favoriteTreatments}>
      <FavoriteTreatmentsDescription />
      <div className={styles.imgs}>
        {favoriteTreatments.map((treatment) => (
          <Link
            to={`/${getTreatmentPath(treatment.name)}`}
            key={treatment.id}
            className={styles.link}
          >
            <div
              className={styles.favoriteTreatment}
              style={{ backgroundImage: `url(${treatment.imgUrl})` }}
            >
              <span className={cn(styles.name, "poppins-regular")}>
                {treatment.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
