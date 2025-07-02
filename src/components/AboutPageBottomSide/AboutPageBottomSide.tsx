import AboutBookAConsultation from "../../features/AboutBookAConsultation";
import aboutBottomSideImg from "/pngs/aboutPageBottomSide.png";

import styles from "./AboutPageBottomSide.module.css";

export const AboutPageBottomSide = () => {
  return (
    <div className={styles.aboutPageBottomSide}>
      <AboutBookAConsultation />
      <div
        className={styles.aboutBookAConsultationImg}
        style={{ backgroundImage: `url(${aboutBottomSideImg})` }}
      ></div>
    </div>
  );
};
