import MenuItem from "../../../features/MenuItem";
import cn from "classnames";
import { useWindowSize } from "../../../hooks/useWindowSize";
import menuImg from "/pngs/burgerMenuImg.png";
import LogoSVG from "../../../assets/Logo.svg";
import menuCloseImg from "/pngs/mobileMenuCloseIcon.png";

import styles from "./Menu.module.css";
import { useState } from "react";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { Link } from "react-router";

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
              src={isMobile && isOpen ? menuCloseImg : menuImg}
              alt="menu"
              className={styles.menuImg}
            />
          </button>
          {isOpen && (
            <ul className={styles.menu}>
              <Link to="/" className={styles.logo} onClick={handleCloseModal}>
                <div
                  className={styles.logoSvg}
                  style={{ backgroundImage: `url(${LogoSVG})` }}
                ></div>
              </Link>
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
              <div className={styles.phoneNumberWrapper}>
                <img src={"/pngs/phone.png"} alt="phone" />
                <span className={cn(styles.phoneNumber, "poppins-light")}>
                  {" "}
                  818 747 2470
                </span>
              </div>
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
