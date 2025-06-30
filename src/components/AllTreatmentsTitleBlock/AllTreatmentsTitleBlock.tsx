import Title from "../../shared/Title";
import styles from "./AllTreatmentsTitleBlock.module.css";

export const AllTreatmentsTitleBlock = () => {
  return (
    <div className={styles.title_block}>
      <div className={styles.title_image}></div>
      <div className={styles.title_text_block}>
        <Title
          text="ALL TREATMENTS"
          className="title_h1_75"
          isH1
          font="dm-serif-display-regular"
        />
      </div>
    </div>
  );
};
