import AboutPageBottomSide from "../../components/AboutComponents/AboutPageBottomSide";
import AboutPageCards from "../../components/AboutComponents/AboutPageCards";
import AboutPageDescription from "../../components/AboutComponents/AboutPageDescription";
import AboutTitleBlock from "../../components/AboutComponents/AboutTitleBlock";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.aboutPage}>
      <AboutTitleBlock />
      <AboutPageDescription />
      <AboutPageCards />
      <AboutPageBottomSide />
    </div>
  );
};
