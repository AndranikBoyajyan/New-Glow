import { useState } from "react";
import arrowDown from "/pngs/arrowDown.png";
import arrowUp from "/pngs/arrowUp.png";
import MenuItem from "../../features/MenuItem";

import styles from "./Menu.module.css";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ul className={styles.menu}>
      <MenuItem name="ABOUT US" redirectUrl="/about" />
      <MenuItem
        redirectUrl="/treatments"
        name="TREATMENTS"
        imgSrc={!isOpen ? arrowDown : arrowUp}
        alt="arrow"
        isOpen={isOpen}
        handleClick={handleClick}
      />
      <MenuItem redirectUrl="/products" name="PRODUCTS" />
      <MenuItem redirectUrl="/blog" name="BLOG" />
    </ul>
  );
};
