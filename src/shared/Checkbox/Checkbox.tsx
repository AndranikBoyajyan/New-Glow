import type { FC } from "react";
import styles from "./checkbox.module.css";
import cn from "classnames";

interface CheckboxProps {
  text: string;
  font: string;
  checked: boolean;
  checkboxClassName?: string;
  labelClassName: string;
  handleClick?: (checked?: number) => void;
}

export const Checkbox: FC<CheckboxProps> = ({
  text,
  font,
  checked,
  checkboxClassName,
  labelClassName,
  handleClick,
}) => {
  return (
    <div className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        name="checkbox"
        className={cn(styles.checkbox, styles[checkboxClassName ?? ""])}
        id={text}
        checked={checked}
        onChange={() => handleClick?.()}
      />
      <label htmlFor={text} className={cn(styles[labelClassName], font)}>
        {text}
      </label>
    </div>
  );
};
