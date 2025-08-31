import { useState, type FC } from "react";
import cn from "classnames";
import Treatments from "../Treatments";
import arrowDown from "/pngs/arrowDown.png";
import arrowUp from "/pngs/arrowUp.png";
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
          onClick={onClose}
        >
          <span className={cn(styles.itemName, "poppins-light")}>{name}</span>
        </Link>
      )}
    </li>
  );
};
