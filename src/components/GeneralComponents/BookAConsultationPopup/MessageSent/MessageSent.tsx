import cn from "classnames";
import Title from "../../../../shared/Title";
import sentMessage from "/pngs/sentMessage.png";

import { Link } from "react-router";
import styles from "./MessageSent.module.css";

interface MessageSentProps {
  onClose: () => void;
}

export const MessageSent = ({ onClose }: MessageSentProps) => {
  return (
    <div className={styles.messageSent}>
      <div className={styles.descriptionWrapper}>
        <Title
          text="your message is sent successfully."
          font="fjalla-one-regular"
          className="title_20"
        />
        <span className={cn(styles.description, "poppins-regular")}>
          Our managers will contact you soon
        </span>
      </div>
      <div
        style={{ backgroundImage: `url(${sentMessage})` }}
        className={styles.sentImage}
      ></div>
      <Link
        to="/"
        onClick={() => {
          onClose();
          return window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className={styles.link}
      >
        <span className={cn(styles.redirectText, "poppins-medium")}>
          GO HOME
        </span>
      </Link>
    </div>
  );
};
