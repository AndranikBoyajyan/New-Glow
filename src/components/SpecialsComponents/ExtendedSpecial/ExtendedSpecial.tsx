import extendedSpecialBg from "/pngs/extendedSpecialBg.png";

import styles from "./ExtendedSpecial.module.css";

export const ExtendedSpecial = () => {
  return (
    <div className={styles.extendedSpecial}>
      <div
        style={{
          backgroundImage: `url(${extendedSpecialBg})`,
        }}
        className={styles.extendedSpecialBgImg}
      ></div>
    </div>
  );
};
