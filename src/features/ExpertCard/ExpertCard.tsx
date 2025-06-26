import Title from "../../shared/Title";
import styles from "./expertCard.module.css";
import ExpertCardSlider from "./ExpertCardSlider";

export const ExpertCard = () => {
  return (
    <div className={styles.expertCard}>
      <Title text="OUR EXPERTS" font="fjalla-one-regular" />
      <ExpertCardSlider />
    </div>
  );
};
