import type { FC } from "react";
import cn from "classnames";
import styles from "./TreatmentCard.module.css";
import { Link } from "react-router";
import { getTreatmentPath } from "../../helpers/getTreatmentPath";

interface TreatmentCardProps {
  name: string;
  imgUrl: string;
  description: string;
  isRight: boolean;
}

export const TreatmentCard: FC<TreatmentCardProps> = ({
  name,
  imgUrl,
  description,
  isRight,
}) => {
  const urlParamsName = getTreatmentPath(name);

  return (
    <Link to={urlParamsName} style={{ textDecoration: "none" }}>
      <div
        className={cn(styles.treatmentCard, {
          [styles.treatmentCardRight]: isRight,
        })}
      >
        <img src={imgUrl} alt={name} className={styles.img} />
        <div className={styles.name_and_description_block}>
          <div className={cn(styles.name, "poppins-extralight")}>{name}</div>
          <span className={cn(styles.description, "poppins-regular")}>
            {description}
          </span>
        </div>
      </div>
    </Link>
  );
};
