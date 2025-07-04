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
}

export const MenuItem: FC<MenuItemProps> = ({
  name,
  redirectUrl,
  isDropDown,
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
  };

  const imgSrc = isOpen ? arrowUp : arrowDown;

  return (
    <li
      className={cn(styles.li, {
        [styles.openedDropdown]: isOpen,
      })}
    >
      {isDropDown ? (
        <div
          // role="menuitem"
          // tabIndex={0}
          className={styles.menuItem}
          onClick={handleSetOpenDropdown}
          // onBlur={handleBlur}
        >
          <span className={cn(styles.itemName, "poppins-light")}>{name}</span>
          <img src={imgSrc} alt={"arrow"} className={styles.img} />
        </div>
      ) : (
        <Link to={redirectUrl ?? ""} className={styles.redirectLink}>
          <span className={cn(styles.itemName, "poppins-light")}>{name}</span>
        </Link>
      )}
      {isOpen && <Treatments handleBlur={handleBlur} />}
    </li>
  );
};
