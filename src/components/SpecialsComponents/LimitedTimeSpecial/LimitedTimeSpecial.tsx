import Title from "../../../shared/Title";

import textStroke from "../../../../src/assets/Buy2GET3RD(Stroke).svg";
import textFill from "../../../../src/assets/Buy2GET3RD.svg";
import freeSvg from "../../../../src/assets/free.svg";
import freeStroke from "../../../../src/assets/free(Stroke).svg";
import underLine from "../../../../src/assets/limitedTimeStroke.svg";

import styles from "./LimitedTimeSpecial.module.css";

export const LimitedTimeSpecial = () => {
  return (
    <div className={styles.limitedTimeSpecialBg}>
      <div className={styles.limitedTimeSpecialBgImg}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleTexts}>
            <Title text="limited" className="special_absolute_100" />
            <Title text="time" className="special_absolute_100" />
            <Title text="special" className="special_absolute_100" />
          </div>
        </div>
        <div className={styles.content}>
          <Title
            text="All morpheus 8 treatments"
            className="title_h1_70"
            font="poppins-semibold"
            isH1
          />

          <div className={styles.svgsWrapper}>
            <div className={styles.topText}>
              <img
                src={textFill}
                alt=""
                aria-hidden="true"
                className={styles.svgFill}
              />
              <img
                src={textStroke}
                alt=""
                aria-hidden="true"
                className={styles.svgStroke}
              />
            </div>

            <div className={styles.bottomText}>
              <img
                src={freeSvg}
                alt=""
                aria-hidden="true"
                className={styles.free}
              />
              <img
                src={freeStroke}
                alt=""
                aria-hidden="true"
                className={styles.freeStroke}
              />
            </div>
            <div className={styles.underLineContainer}>
              <img
                src={underLine}
                alt=""
                aria-hidden="true"
                className={styles.underLine}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
