import { type FC } from "react";
import cn from "classnames";
import styles from "./TreatmentCard.module.css";
import { Link, useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const urlParamsName = getTreatmentPath(name);

  const handleRedirect = () => {
    navigate(`${urlParamsName}`);
  };

  return (
    <Link
      to={urlParamsName}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={styles.link}
    >
      <div
        className={cn(styles.treatmentCard, {
          [styles.treatmentCardRight]: isRight,
        })}
      >
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className={styles.img}
        ></div>
        <div className={styles.name_and_description_block}>
          <div className={cn(styles.name, "poppins-extralight")}>{name}</div>
          <span className={cn(styles.description, "poppins-regular")}>
            {description}
          </span>
          <div className={cn(styles.buttonWrapper)}>
            <Button
              className="button_view_all"
              content="View All"
              font="poppins-regular"
              handleClick={handleRedirect}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
