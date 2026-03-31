import MenuItem from "../../../features/MenuItem";
import cn from "classnames";
import { useWindowSize } from "../../../hooks/useWindowSize";
import menuImg from "/webpImages/burgerMenuImg.webp";
import LogoSVG from "../../../assets/Logo.svg";
import menuCloseImg from "/webpImages/mobileMenuCloseIcon.webp";
import { useEffect, useState } from "react";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { Link } from "react-router";
import type { MenuItem as MenuItemType } from "./lib/model";
import { getMenuItems } from "../../../service/endpoints/getMenuItems";

import styles from "./Menu.module.css";

export const Menu = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  const [menuItems, setMenuItems] = useState<MenuItemType[]>([]);

  const isMobile = width < MEDIA_TABLET_SMALL;

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getMenuItems().then((res) => setMenuItems(res));
  }, []);

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
              <Link
                to="/"
                className={styles.logo}
                onClick={() => {
                  handleCloseModal();
                }}
              >
                <div
                  className={styles.logoSvg}
                  style={{ backgroundImage: `url(${LogoSVG})` }}
                ></div>
              </Link>
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  name={item.name.toUpperCase()}
                  isDropDown={item.isDropDown}
                  redirectUrl={item.name.split(" ")[0].toLowerCase()}
                />
              ))}
              <div className={styles.phoneNumberWrapper}>
                <img src={"/webpImages/phone.webp"} alt="phone" />
                <Link
                  to={"tel:+18187472470"}
                  className={styles.phoneNumberLink}
                >
                  <span className={cn(styles.phoneNumber, "poppins-regular")}>
                    {" "}
                    818 747 2470
                  </span>
                </Link>
              </div>
            </ul>
          )}
        </div>
      ) : (
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name.toUpperCase()}
              isDropDown={item.isDropDown}
              redirectUrl={item.name.split(" ")[0].toLowerCase()}
              onClose={handleCloseModal}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
