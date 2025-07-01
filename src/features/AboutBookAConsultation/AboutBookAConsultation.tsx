import Button from "../../shared/Button";
import cn from "classnames";

import styles from "./AboutBookAConsultation.module.css";

export const AboutBookAConsultation = () => {
  return (
    <div className={styles.aboutBookAConsultation}>
      <span className={cn(styles.text, "poppins-medium")}>
        We're here to guide you every step of the way—with care, integrity, and
        elegance.
      </span>
      <Button content="Book a consultation" className="button_dark" />
    </div>
  );
};
