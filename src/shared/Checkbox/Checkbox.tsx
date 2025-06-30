import type { FC } from "react";
import styles from "./checkbox.module.css";
import cn from "classnames";

interface CustomerReviewCardProps {
  text: string;
}

export const Checkbox: FC<CustomerReviewCardProps> = ({ text }) => {
  return (
    <div
      className={cn(styles.all_treatments_filter_checkbox, "poppins-regular")}
    >
      <input
        type="checkbox"
        name="checkbox"
        className={styles.checkbox}
        id={text}
      />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};
