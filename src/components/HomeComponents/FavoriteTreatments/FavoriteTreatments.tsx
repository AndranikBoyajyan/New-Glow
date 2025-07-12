import { Link } from "react-router";
import FavoriteTreatmentsDescription from "../../../entities/FavoriteTreatmentsDescription";
import Button from "../../../shared/Button";

import { favoriteTreatments } from "./constants/favoriteTreatments";
import styles from "./FavoriteTreatments.module.css";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const FavoriteTreatments = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.favoriteTreatments}>
      <FavoriteTreatmentsDescription />
      <div className={styles.imgs}>
        {favoriteTreatments.map((treatment) => (
          <Link
            key={treatment.id}
            className={styles.favoriteTreatment}
            style={{ backgroundImage: `url(${treatment.imgUrl})` }}
            to={`/${treatment.name.replaceAll(" ", "-").toLowerCase()}`}
          >
            <Button
              className={
                isMobile ? "button_transparent_white" : "button_transparent"
              }
              content={treatment.name}
              font="poppins-regular"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
