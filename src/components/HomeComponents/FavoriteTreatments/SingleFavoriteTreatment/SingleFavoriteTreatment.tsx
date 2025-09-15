import { Link } from "react-router";
import cn from "classnames";
import { getTreatmentPath } from "../../../../helpers/getTreatmentPath";
import type { IFavoriteTreatmentsDescription } from "../../../../types/global.types";

import styles from "./SingleFavoriteTreatment.module.css";

interface SingleFavoriteTreatmentProps {
  treatment: IFavoriteTreatmentsDescription;
}

export const SingleFavoriteTreatment = ({
  treatment,
}: SingleFavoriteTreatmentProps) => {
  const treatmentClassname = treatment.name.replaceAll(" ", "").toLowerCase();

  return (
    <Link
      to={`/${getTreatmentPath(treatment.name)}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      key={treatment.id}
      className={cn(styles.link, styles[treatmentClassname])}
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
  );
};
