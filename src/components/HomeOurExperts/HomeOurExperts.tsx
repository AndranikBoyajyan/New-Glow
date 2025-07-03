import ExpertCard from "../../features/ExpertCard";
import cn from "classnames";
import styles from "./HomeOurExperts.module.css";
import Title from "../../shared/Title";
import { useWindowSize } from "../../hooks/useWindowSize";

export const HomeOurExperts = () => {
  const { width } = useWindowSize();

  const isMobile = width < 768;

  return (
    <div className={styles.homeOurExperts}>
      <div className={styles.expert}>
        <ExpertCard />
      </div>
      <div className={styles.location}>
        <div className={styles.locationTextWrapper}>
          <Title
            text="OUR LOCATION"
            font="poppins-regular"
            className={!isMobile ? "title_white" : "title_32"}
          />
          <span className={cn(styles.address, "poppins-regular")}>
            10651 Riverside Drive Toluca Lake, CA 91602
          </span>
        </div>
      </div>
    </div>
  );
};
