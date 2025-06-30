import Title from "../../shared/Title";

import cn from "classnames";

import styles from "./FavoriteTreatmentsDescription.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";

export const FavoriteTreatmentsDescription = () => {
  const { width } = useWindowSize();
  return (
    <div className={styles.description}>
      <Title
        text="OUR FAVORITE TREATMENTS"
        font="fjalla-one-regular"
        className={width < 768 ? "title_28" : ""}
      />
      <p className={cn(styles.paragraph, "poppins-regular")}>
        Botox, fillers, PDO thread lifts, PRP injections, and more—whatever your
        needs, we are here to fulfill them. Not sure which treatment is right
        for you? Book a free virtual consultation with our licensed providers,
        or contact us to learn more about scheduling an in-person consultation.
      </p>
    </div>
  );
};
