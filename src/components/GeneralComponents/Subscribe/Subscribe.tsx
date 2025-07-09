import Button from "../../../shared/Button";
import Title from "../../../shared/Title";
import styles from "./subscribe.module.css";

export const Subscribe = () => {
  return (
    <div className={styles.subscribe}>
      <div className={styles.titleWrapper}>
        <Title text="Subscribe to our news" font="fjalla-one-regular" />
      </div>
      <form className={styles.emailForm}>
        <input type="email" placeholder="Email" className={styles.emailInput} />
        <Button className="button_send" content=">" />
      </form>
      <div className={styles.divider}></div>
    </div>
  );
};
