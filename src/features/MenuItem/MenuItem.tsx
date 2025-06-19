import cn from "classnames";
import styles from "./MenuItem.module.css";
import Treatments from "../Treatments";
import type { FC } from "react";
import { Link } from "react-router";

interface MenuItemProps {
  name: string;
  redirectUrl: string;
  imgSrc?: string;
  alt?: string;
  isOpen?: boolean;
  handleClick?: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({
  name,
  redirectUrl,
  imgSrc,
  alt,
  isOpen,
  handleClick,
}) => {
  return (
    <li
      className={cn(styles.li, {
        [styles.openedDropdown]: isOpen,
      })}
    >
      {imgSrc ? (
        <div className={styles.menuItem} onClick={handleClick}>
          <span className={cn(styles.itemName, "poppins-light")}>{name}</span>
          <img src={imgSrc} alt={alt} className={styles.img} />
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
