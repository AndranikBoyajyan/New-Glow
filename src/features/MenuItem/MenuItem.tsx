import { useState, type FC } from "react";
import cn from "classnames";
import Treatments from "../Treatments";
import arrowDown from "/pngs/arrowDown.png";
import arrowUp from "/pngs/arrowUp.png";
import { Link } from "react-router";

import styles from "./MenuItem.module.css";
interface MenuItemProps {
  name: string;
  redirectUrl: string;
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

  const handleBlur = () => {
    setIsOpen(false);
  };

  const imgSrc = isOpen ? arrowUp : arrowDown;

  return (
    <li
      tabIndex={isDropDown ? 0 : undefined}
      className={cn(styles.li, {
        [styles.openedDropdown]: isOpen,
      })}
      onBlur={handleBlur}
    >
      {isDropDown ? (
        <div className={styles.menuItem} onClick={handleSetOpenDropdown}>
          <span className={cn(styles.itemName, "poppins-light")}>{name}</span>
          <img src={imgSrc} alt={"arrow"} className={styles.img} />
        </div>
      ) : (
        <Link to={redirectUrl} className={styles.redirectLink}>
          <span className={cn(styles.itemName, "poppins-light")}>{name}</span>
        </Link>
      )}
      {isOpen && <Treatments />}
    </li>
  );
};
