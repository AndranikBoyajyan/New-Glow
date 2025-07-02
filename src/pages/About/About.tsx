import AboutPageBottomSide from "../../components/AboutPageBottomSide";
import AboutPageCards from "../../components/AboutPageCards";
import AboutPageDescription from "../../components/AboutPageDescription";
import AboutTitleBlock from "../../components/AboutTitleBlock";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.divider}></div>
      <AboutTitleBlock />
      <AboutPageDescription />
      <AboutPageCards />
      <AboutPageBottomSide />
    </div>
  );
};
