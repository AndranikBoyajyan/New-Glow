import MenuItem from "../../features/MenuItem";

import styles from "./Menu.module.css";

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem redirectUrl="/about" name="ABOUT US" />
      <MenuItem name="TREATMENTS" isDropDown />
      <MenuItem redirectUrl="/products" name="PRODUCTS" />
      <MenuItem redirectUrl="/blog" name="BLOG" />
    </ul>
  );
};
