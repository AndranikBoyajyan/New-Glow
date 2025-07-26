import { type FC } from "react";
import cn from "classnames";
import styles from "./homeTreatmentCard.module.css";
import { Button } from "../../shared/Button/Button";
import { Link, useNavigate } from "react-router";
import { getTreatmentPath } from "../../helpers/getTreatmentPath";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";

interface HomeTreatmentCardProps {
  name: string;
  imgUrl: string;
}

export const HomeTreatmentCard: FC<HomeTreatmentCardProps> = ({
  name,
  imgUrl,
}) => {
  const { width } = useWindowSize();
  const isMobile = width < MEDIA_TABLET_SMALL;

  const navigate = useNavigate();

  const urlParamsName = getTreatmentPath(name);

  const handleRedirect = () => {
    navigate(`/all-treatments#${urlParamsName}`);
  };

  return (
    <Link
      to={`/all-treatments`}
      state={{ scrollTo: urlParamsName }}
      className={styles.home_treatment_card}
      style={{
        backgroundImage: `url(${imgUrl})`,
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
      {!isMobile && <div className={styles.gradient}></div>}
    </Link>
  );
};
