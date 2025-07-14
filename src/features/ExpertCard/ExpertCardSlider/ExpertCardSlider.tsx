import cn from "classnames";
import { ourExperts } from "../constants/ourExperts";
import styles from "./expertCardSlider.module.css";
import CustomSwiper from "../../CustomSwiper";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const ExpertCardSlider = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.swiperContainer}>
      <CustomSwiper
        slides={ourExperts.map((ourExpert) => (
          <div key={ourExpert.id}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${ourExpert.imgUrl})` }}
            ></div>
            <div className={styles.expertCardText}>
              <span className={cn(styles.expertName, "poppins-regular")}>
                {ourExpert.name}
              </span>
              <span
                className={cn(styles.expertProfession, "poppins-light-italic")}
              >
                {ourExpert.profession}
              </span>
            </div>
          </div>
        ))}
        isArrow={!isMobile}
        bulletsClassName="bullets_experts"
      />
    </div>
  );
};
