import cn from "classnames";
import julyImg1 from "/pngs/julyImg1.png";
import julyImg2 from "/pngs/julyImg2.png";
import julyFlag from "/pngs/julyFlag.png";

import styles from "./JulySpecials.module.css";

export const JulySpecials = () => {
  return (
    <div className={styles.julySpecials}>
      <div className={styles.julySpecialsTopImages}>
        <div
          style={{
            backgroundImage: `url(${julyImg1})`,
          }}
          className={cn(styles.julyStars, styles.star1)}
        ></div>
        <div
          style={{
            backgroundImage: `url(${julyImg2})`,
          }}
          className={cn(styles.julyStars, styles.star2)}
        ></div>
      </div>
      <div
        style={{
          backgroundImage: `url(${julyFlag})`,
        }}
        className={styles.julyFlag}
      ></div>
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
