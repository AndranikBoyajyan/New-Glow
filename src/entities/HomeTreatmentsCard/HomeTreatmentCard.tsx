import { type FC } from "react";
import cn from "classnames";
import styles from "./homeTreatmentCard.module.css";
import { Button } from "../../shared/Button/Button";
import { Link, useLocation, useNavigate } from "react-router";


interface HomeTreatmentCardProps {
  name: string;
  imgUrl: string;
  id: string;
}

export const HomeTreatmentCard: FC<HomeTreatmentCardProps> = ({
  name,
  imgUrl,
  id,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const urlParamsName = name.replaceAll(" ", "-").toLowerCase();

  const handleRedirect = () => {
    navigate(`/all-treatments#${urlParamsName}`);
  };

  console.log({ location });

  return (
    <Link

      to={`/all-treatments`}
      state={{ scrollTo: urlParamsName }}

      className={styles.home_treatment_card}
      style={{
        backgroundImage: `url(${imgUrl})`,
        textDecoration: "none",
      }}
    >
      <div className={styles.treatment_name_and_button}>
        <span className={cn(styles.treatment_name, "poppins-regular")}>
          {name.toUpperCase()}
        </span>
        <div className={styles.buttonWrapper}>
          <Button
            content="Learn more"
            className="button_weight_2"
            font="poppins-medium"
            handleClick={handleRedirect}
          />
        </div>
      </div>
    </Link>
  );
};
