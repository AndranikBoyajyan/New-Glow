import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Title from "../../../shared/Title";
import styles from "./AllTreatmentsTitleBlock.module.css";

export const AllTreatmentsTitleBlock = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.title_block}>
      <div className={styles.title_image}></div>
      <div className={styles.title_text_block}>
        <Title
          text="ALL TREATMENTS"
          className={!isMobile ? "title_h1_75" : "title_h1_40"}
          isH1
        />
      </div>
    </div>
  );
};
