import cn from "classnames";
import styles from "./footer.module.css";
import instagramLogo from "/pngs/instagramLogo.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const Footer = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={cn(styles.footer, "poppins-regular")}>
      <div className={styles.footerTexts}>
        <div className={styles.menu}>
          <p>MENU</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <p>Shipping Policy</p>
          <p>Accessibility Statement</p>
        </div>
        <div className={styles.address_info}>
          <p>OUR ADDRESS</p>
          <p>10651 Riverside Drive</p>
          <p>Toluca Lake, CA 91602</p>
          <p>newglow@yahoo.com</p>
        </div>
        <div className={styles.openHours}>
          <div>
            <p>OPEN HOURS (By Appointment Only)</p>
            <p>Monday: 10am - 5pm</p>
            <p>Tuesday: 10am - 5pm,</p>
            <p>Wednesday: 10am - 6pm</p>
            <p>Thursday: 10am - 5pm</p>
            <p>Friday: 10am - 5pm</p>
            <p>Saturday: Closed</p>
            <p>Sunday: Closed</p>
          </div>
          <div>
            <p>PLEASE NOTE:</p>
            <p>Closed For Lunch</p>
            <p>1pm-2pm</p>
          </div>
          <div>
            <p className="poppins-semibold">Call Us: 818-747-2470</p>
            <p className="poppins-semibold">Text Us: 818-570-7990</p>
          </div>
          <div>
            <p>After Hours Medical</p>
            <p>Emergency:</p>
            <p>818-570-7960</p>
          </div>
        </div>
      </div>
      {!isMobile && (
        <div className={styles.instagram_block}>
          <img src={instagramLogo} alt="" height={27} />
          <span>INSTAGRAM</span>
        </div>
      )}
    </div>
  );
};
