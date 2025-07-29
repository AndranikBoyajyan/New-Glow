import LogoSVG from "../../../assets/Logo.svg";
import cn from "classnames";

import styles from "./Header.module.css";
import Menu from "../Menu";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { Link } from "react-router";

export const Header = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <div
          className={styles.logoSvg}
          style={{ backgroundImage: `url(${LogoSVG})` }}
        ></div>
        <span className={cn(styles.logoText, "poppins-extralight")}>
          MED SPA
        </span>
      </Link>
      <div className={styles.menu}>
        <Menu />
      </div>
      {!isMobile && (
        <div className={styles.phoneNumberWrapper}>
          <img src={"/pngs/phone.png"} alt="phone" />
          <span className={cn(styles.phoneNumber, "poppins-regular")}>
            +818 747 2470
          </span>
        </div>
      )}
    </div>
  );
};
