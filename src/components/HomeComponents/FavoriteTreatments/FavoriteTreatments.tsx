import { useEffect, useState } from "react";
import FavoriteTreatmentsDescription from "../../../entities/FavoriteTreatmentsDescription";
import styles from "./FavoriteTreatments.module.css";
import SingleFavoriteTreatment from "./SingleFavoriteTreatment";
import { getFavTreatments } from "./service/getFavTreatments";
import type { IFavoriteTreatments } from "../../../types/global.types";

export const FavoriteTreatments = () => {
  const [favTreatments, setFavTreatments] = useState<IFavoriteTreatments[]>([]);

  useEffect(() => {
    getFavTreatments().then((res) => setFavTreatments(res));
  }, []);

  return (
    <div className={styles.favoriteTreatments}>
      <FavoriteTreatmentsDescription />
      <div className={styles.imgs}>
        {favTreatments.map((treatment) => (
          <SingleFavoriteTreatment key={treatment.id} treatment={treatment} />
        ))}
      </div>
    </div>
  );
};
