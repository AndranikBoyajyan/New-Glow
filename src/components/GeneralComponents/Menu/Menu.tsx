import MenuItem from "../../../features/MenuItem";
import { useWindowSize } from "../../../hooks/useWindowSize";
import menuImg from "/pngs/burgerMenuImg.png";
import manuCloseImg from "/pngs/mobileMenuCloseIcon.png";

import styles from "./Menu.module.css";
import { useState } from "react";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const Menu = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = width < MEDIA_TABLET_SMALL;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={
        isMobile && isOpen ? styles.menuWrapperOpen : styles.menuWrapper
      }
    >
      {isMobile ? (
        <div className={styles.menuMobile}>
          <button
            className={isMobile && isOpen ? styles.menuBtnOpen : styles.menuBtn}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isMobile && isOpen ? manuCloseImg : menuImg}
              alt="menu"
              className={styles.menuImg}
            />
          </button>
          {isOpen && (
            <ul className={styles.menu}>
              <MenuItem
                redirectUrl="/about"
                name="ABOUT US"
                onClose={handleCloseModal}
              />
              <MenuItem
                name="TREATMENTS"
                isDropDown
                onClose={handleCloseModal}
              />
              <MenuItem
                redirectUrl="/products"
                name="PRODUCTS"
                onClose={handleCloseModal}
              />
              <MenuItem
                redirectUrl="/blog"
                name="BLOG"
                onClose={handleCloseModal}
              />
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
