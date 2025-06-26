import Title from "../../shared/Title";

import cn from "classnames";

import styles from "./AboutTitleBlock.module.css";

export const AboutTitleBlock = () => {
  return (
    <div className={styles.titleBlock}>
      <div className={styles.titleWrapper}>
        <Title
          text="About us"
          className="title_h1_120"
          isH1
          font="dm-serif-display-regular"
        />
      </div>
      <div className={styles.topSideContent}>
        <div className={styles.descriptionWrapper}>
          <span className={cn(styles.description, "poppins-light")}>
            At NewGlow Aesthetic Medical Clinic, we believe that true beauty
            begins with confidence. Our mission is to enhance your natural
            radiance through advanced, personalized aesthetic treatments
            performed in a safe, serene, and welcoming environment.
          </span>
        </div>
      </div>
    </div>
  );
};
