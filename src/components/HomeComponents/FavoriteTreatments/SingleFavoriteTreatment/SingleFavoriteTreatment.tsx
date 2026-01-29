import { Link } from "react-router";
import cn from "classnames";
import { getTreatmentPath } from "../../../../helpers/getTreatmentPath";
import type { IFavoriteTreatments } from "../../../../types/global.types";

import styles from "./SingleFavoriteTreatment.module.css";

interface SingleFavoriteTreatmentProps {
  treatment: IFavoriteTreatments;
}

export const SingleFavoriteTreatment = ({
  treatment,
}: SingleFavoriteTreatmentProps) => {
  if (!treatment) return null;
  const treatmentClassname = treatment.title.replaceAll(" ", "").toLowerCase();

  return (
    <Link
      to={`/${getTreatmentPath(treatment.title)}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(styles.link, styles[treatmentClassname])}
    >
      <div
        className={styles.favoriteTreatment}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_SERVER_API}${
            treatment.imageUrl
          })`,
        }}
      >
        <span className={cn(styles.name, "poppins-regular")}>
          {treatment.title}
        </span>
      </div>
    </Link>
  );
};
