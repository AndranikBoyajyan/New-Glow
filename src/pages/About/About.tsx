import AboutTitleBlock from "../../components/AboutTitleBlock";
// import { useWindowSize } from "../../hooks/useWindowSize";
import styles from "./About.module.css";

export const About = () => {
  // const { width, height } = useWindowSize(); // TODO: use media queries

  return (
    <div className={styles.aboutPage}>
      <div className={styles.divider}></div>
      <AboutTitleBlock />
    </div>
  );
};
