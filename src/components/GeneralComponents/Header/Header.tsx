import LogoSVG from "../../../assets/Logo.svg";
import cn from "classnames";

import styles from "./Header.module.css";
import Menu from "../Menu";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div
          className={styles.logoSvg}
          style={{ backgroundImage: `url(${LogoSVG})` }}
        ></div>
        <span className={cn(styles.logoText, "poppins-extralight")}>
          MED SPA
        </span>
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.phoneNumberWrapper}>
        <img src={"/pngs/phone.png"} alt="phone" />
        <span className={cn(styles.phoneNumber, "poppins-regular")}>
          +715462316473
        </span>
      </div>
    </div>
  );
};
