import cn from "classnames";
import julySpecialBg from "../../../assets/julySpecialBg.svg";

import styles from "./JulySpecials.module.css";

export const JulySpecials = () => {
  return (
    <div
      className={styles.julySpecials}
      style={{
        backgroundImage: `url(${julySpecialBg})`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <span className={cn(styles.title, "poppins-bold")}>
            4TH OF JULY SPECIALS
          </span>
        </div>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <span className={cn(styles.text1, "poppins-medium")}>
              ALL FILTERS
            </span>
            <span className={cn(styles.text2, "poppins-bold-italic")}>
              10% OFF
            </span>
          </div>
          <div className={styles.block}>
            <span className={cn(styles.text1, "poppins-medium")}>BOTOX</span>
            <span className={cn(styles.text2, "poppins-bold-italic")}>
              9.95$/UNIT
            </span>
          </div>
          <div className={styles.block}>
            <span className={cn(styles.text1, "poppins-medium")}>
              50+ UNITS OF BOTOX
            </span>
            <span className={cn(styles.text2, "poppins-bold-italic")}>
              GET 50% OFF ANY FACIAL
            </span>
          </div>
          <div className={styles.block}>
            <span className={cn(styles.text2, "poppins-bold-italic")}>
              20% OFF{" "}
            </span>
            <span className={cn(styles.text1, "poppins-medium")}>
              YOUR FIRST FACIAL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
