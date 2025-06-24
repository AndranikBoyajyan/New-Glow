import specialPromoTitle from "/pngs/specialPromoTitle.png";
import cn from "classnames";
import styles from "./SpecialPromo.module.css";
import Button from "../../shared/Button";

export const SpecialPromo = () => {
  return (
    <div className={styles.specialPromo}>
      <div className={styles.specialPromoContent}>
        <div className={styles.specialPromoTitleWrapper}>
          <img
            src={specialPromoTitle}
            className={styles.specialPromoTitle}
            alt="text"
          />
        </div>
        <div className={styles.specialPromoBottomSideWrapper}>
          <div className={styles.textAndButtons}>
            <span className={cn(styles.text_56, "dm-serif-display-regular")}>
              Buy 2 facials
            </span>
            <span className={cn(styles.text_78, "dm-serif-display-regular")}>
              GET 3RD free
            </span>
            <div className={styles.buttons}>
              <Button
                content="Book a consultation"
                className="button_dark"
                font="poppins-medium"
              />
              <Button
                content="See all PROMOS"
                className="button_weight_2"
                font="poppins-medium"
              />
            </div>
          </div>
          <div className={styles.rightSideText}>
            <span className={cn(styles.text_24, "poppins-regular")}>
              Gua Sha Facial
            </span>
            <span className={cn(styles.text_24, "poppins-regular")}>
              Oxygen Facial
            </span>
            <span className={cn(styles.text_24, "poppins-regular")}>
              Hydro Facial
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
