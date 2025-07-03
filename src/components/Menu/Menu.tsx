import MenuItem from "../../features/MenuItem";

import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem name="ABOUT US" redirectUrl="/about" />
      <MenuItem redirectUrl="/treatments" name="TREATMENTS" isDropDown />
      <MenuItem redirectUrl="/products" name="PRODUCTS" />
      <MenuItem redirectUrl="/blog" name="BLOG" />
    </ul>
  );
};
