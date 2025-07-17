import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Button from "../../../shared/Button";
import Title from "../../../shared/Title";
import styles from "./subscribe.module.css";

export const Subscribe = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.subscribe}>
      <div className={styles.titleWrapper}>
        <Title
          text="Subscribe to our news"
          font="fjalla-one-regular"
          className={isMobile ? "title_32" : ""}
        />
      </div>
      <form className={styles.emailForm}>
        <input type="email" placeholder="Email" className={styles.emailInput} />
        <Button className="button_send" content=">" />
      </form>
      <div className={styles.divider}></div>
      <div className={styles.ourLinks}></div>
    </div>
  );
};
