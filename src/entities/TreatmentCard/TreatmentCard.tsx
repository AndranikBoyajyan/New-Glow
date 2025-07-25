import { useState, type FC } from "react";
import cn from "classnames";
import styles from "./TreatmentCard.module.css";
import { Link } from "react-router";
import { getTreatmentPath } from "../../helpers/getTreatmentPath";
import Button from "../../shared/Button";

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
  const [animate, setAnimate] = useState(false);
  const urlParamsName = getTreatmentPath(name);

  const handleMouseEnter = () => {
    setAnimate(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  return (
    <Link to={urlParamsName} style={{ textDecoration: "none" }}>
      <div
        className={cn(styles.treatmentCard, {
          [styles.treatmentCardRight]: isRight,
        })}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={imgUrl} alt={name} className={styles.img} />
        <div className={styles.name_and_description_block}>
          <div className={cn(styles.name, "poppins-extralight")}>{name}</div>
          <span className={cn(styles.description, "poppins-regular")}>
            {description}
          </span>
          <div
            className={cn(
              styles.buttonWrapper,
              animate && styles.buttonWrapperAnimate
            )}
          >
            <Button className="button_all_treatments" content=">" />
          </div>
        </div>
      </div>
    </Link>
  );
};
