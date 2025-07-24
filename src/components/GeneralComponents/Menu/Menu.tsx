import MenuItem from "../../../features/MenuItem";
import { useWindowSize } from "../../../hooks/useWindowSize";
import menuImg from "/pngs/burgerMenuImg.png";

import styles from "./Menu.module.css";
import { useState } from "react";
import {
  // MEDIA_TABLET,
  // MEDIA_TABLET_LARGE,
  MEDIA_TABLET_SMALL,
} from "../../../constants/windowSizes";

export const Menu = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  // const isTabletLarge = width < MEDIA_TABLET_LARGE;
  // const isTabletSmall = width < MEDIA_TABLET;
  const isMobile = width < MEDIA_TABLET_SMALL;

  return (
    <div className={styles.menuWrapper}>
      {isMobile ? (
        <div className={styles.menuMobile}>
          <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
            <img src={menuImg} alt="menu" className={styles.menuImg} />
          </button>
          {isOpen && (
            <ul className={styles.menu}>
              <MenuItem redirectUrl="/about" name="ABOUT US" />
              <MenuItem name="TREATMENTS" isDropDown />
              <MenuItem redirectUrl="/products" name="PRODUCTS" />
              <MenuItem redirectUrl="/blog" name="BLOG" />
            </ul>
          )}
        </div>
      ) : (
        <ul className={styles.menu}>
          <MenuItem redirectUrl="/about" name="ABOUT US" />
          <MenuItem name="TREATMENTS" isDropDown />
          <MenuItem redirectUrl="/products" name="PRODUCTS" />
          <MenuItem redirectUrl="/blog" name="BLOG" />
        </ul>
      )}
    </div>
  );
};
