import type { FC } from "react";
import styles from "./checkbox.module.css";
import cn from "classnames";

interface CheckboxProps {
  text: string;
  font: string;
  checked: boolean;
  handleClick(arg?: number): void;
}

export const Checkbox: FC<CheckboxProps> = ({
  text,
  font,
  checked,
  handleClick,
}) => {
  return (
    <div className={cn(styles.all_treatments_filter_checkbox, font)}>
      <input
        type="checkbox"
        name="checkbox"
        className={styles.checkbox}
        id={text}
        checked={checked}
        onClick={() => handleClick()}
      />
      <label htmlFor={text}>{text}</label>
    </div>
  );
};
