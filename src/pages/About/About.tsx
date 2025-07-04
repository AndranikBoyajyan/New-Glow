import AboutPageBottomSide from "../../components/AboutPageBottomSide";
import AboutPageCards from "../../components/AboutPageCards";
import AboutPageDescription from "../../components/AboutPageDescription";
import AboutTitleBlock from "../../components/AboutTitleBlock";
import Menu from "../../components/Menu";
import styles from "./About.module.css";

export const About = () => {
  return (
    <div className={styles.aboutPage}>
      <Menu />
      <AboutTitleBlock />
      <AboutPageDescription />
      <AboutPageCards />
      <AboutPageBottomSide />
    </div>
  );
};
