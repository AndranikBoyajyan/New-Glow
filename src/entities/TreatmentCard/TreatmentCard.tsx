import { useState, type FC } from "react";
import cn from "classnames";
import styles from "./TreatmentCard.module.css";
import { Link } from "react-router";
import { getTreatmentPath } from "../../helpers/getTreatmentPath";
import Button from "../../shared/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";

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
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

  const [animate, setAnimate] = useState(false);
  const urlParamsName = getTreatmentPath(name);

  const handleMouseEnter = () => {
    setAnimate(true);
  };

  const handleMouseLeave = () => {
    setAnimate(false);
  };

  return (
    <Link
      to={urlParamsName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          <div
            className={cn(styles.buttonWrapper, {
              [styles.buttonWrapperAnimate]: animate && !isMobile,
            })}
          >
            {!isMobile ? (
              <Button className="button_redirect" content=">" />
            ) : (
              <Button
                className="button_view_all"
                content="View All"
                font="poppins-regular"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
