import cn from "classnames";
import styles from "./footer.module.css";
import instagramLogo from "/pngs/instagramLogo.png";

export const Footer = () => {
  return (
    <>
      <div className={cn(styles.footer, "poppins-medium")}>
        <div>
          <p>MENU</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
          <p>Shipping Policy</p>
          <p>Accessibility Statement</p>
        </div>
        <div className={styles.address_info}>
          <div>
            <p>OUR ADDRESS</p>
            <p>10651 Riverside Drive</p>
            <p>Toluca Lake, CA 91602</p>
            <p>newglow@yahoo.com</p>
          </div>
          <div>
            <p>Call Us: 818-747-2470</p>
            <p>Text Us: 818-570-7990</p>
          </div>
          <div>
            <p>After Hours Medical Emergency:</p>
            <p>818-570-7960</p>
          </div>
        </div>
        <div className={styles.address_info}>
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
        </div>
      </div>
      <div className={styles.instagram_block}>
        <img src={instagramLogo} alt="" height={27} />
        <span>INSTAGRAM</span>
      </div>
    </>
  );
};
