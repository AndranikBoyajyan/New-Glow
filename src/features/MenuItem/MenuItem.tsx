import { useState, type FC } from "react";
import cn from "classnames";
import Treatments from "../Treatments";
import arrowDown from "/webpImages/arrowDown.webp";
import arrowUp from "/webpImages/arrowUp.webp";
import { Link } from "react-router";

import styles from "./MenuItem.module.css";
interface MenuItemProps {
  name: string;
  redirectUrl?: string;
  isDropDown?: boolean;
  onClose?: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({
  name,
  redirectUrl,
  isDropDown,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetOpenDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleBlur = () => {
    closeMenu();
    onClose?.();
  };

  const imgSrc = isOpen ? arrowUp : arrowDown;

  return (
    <li className={cn(styles.li)}>
      {isDropDown ? (
        <div
          className={cn(styles.dropdown, {
            [styles.openedDropdown]: isOpen,
          })}
          role="menuitem"
          onBlur={handleBlur}
        >
          <button className={styles.menuItem} onClick={handleSetOpenDropdown}>
            <span className={cn(styles.itemName, "poppins-light")}>{name}</span>
            <img src={imgSrc} alt={"arrow"} className={styles.arrowIcon} />
          </button>
          {isOpen && <Treatments />}
        </div>
      ) : (
        <Link
          to={redirectUrl ?? ""}
          className={styles.redirectLink}
          onClick={() => {
            onClose?.();
            return window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className={cn(styles.itemName, "poppins-light")}>{name}</span>
        </Link>
      )}
    </li>
  );
};
