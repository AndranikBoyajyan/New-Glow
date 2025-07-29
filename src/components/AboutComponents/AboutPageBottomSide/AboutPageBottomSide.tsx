import aboutBottomSideImg from "/pngs/aboutPageBottomSide.png";

import AboutBookAConsultation from "../../../features/AboutBookAConsultation";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET } from "../../../constants/windowSizes";
import styles from "./AboutPageBottomSide.module.css";

export const AboutPageBottomSide = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET;
  return (
    <div
      className={styles.aboutPageBottomSide}
      style={isMobile ? { backgroundImage: `url(${aboutBottomSideImg})` } : {}}
    >
      <AboutBookAConsultation />
      {!isMobile && (
        <div
          className={styles.aboutBookAConsultationImg}
          style={{ backgroundImage: `url(${aboutBottomSideImg})` }}
        ></div>
      )}
    </div>
  );
};
