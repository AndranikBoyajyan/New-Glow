import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import cn from "classnames";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Button from "../../../shared/Button";
import Title from "../../../shared/Title";
import instagramLogo from "/webpImages/instagramLogo.webp";

import styles from "./subscribe.module.css";
import { Link } from "react-router";

export const Subscribe = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.subscribe}>
      <div className={styles.titleWrapper}>
        <Title
          text="Subscribe to our news"
          font="fjalla-one-regular"
          className={isMobile ? "title_32_white" : "title_white"}
        />
      </div>
      <form className={styles.emailForm}>
        <input type="email" placeholder="Email" className={styles.emailInput} />
        <Button className="button_send_white" content=">" />
      </form>
      <span className={cn(styles.followText, "poppins-regular")}>
        Follow us on social media
      </span>
      <Link
        to={"https://www.instagram.com/newglowmedspa"}
        className={styles.instagramWrapper}
      >
        <img src={instagramLogo} className={styles.instagramLogo} alt="insta" />
        <span className={cn(styles.instagramText, "poppins-regular")}>
          INSTAGRAM
        </span>
      </Link>
    </div>
  );
};
