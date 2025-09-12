import cn from "classnames";
import footerImg from "/pngs/footerImg.png";
import Subscribe from "../Subscribe";
import LogoSVGWhite from "../../../assets/logoSvgWhite.svg";
import { Link } from "react-router";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={cn(styles.footer, "poppins-regular")}>
      <div className={styles.topSideWithDivider}>
        <div className={styles.footerTopSideWrapper}>
          <Subscribe />
          <div
            className={styles.footerImg}
            style={{ backgroundImage: `url(${footerImg})` }}
          ></div>
        </div>
        <div className={styles.divider}></div>
      </div>
      <div className={styles.texts}>
        <div className={styles.topSide}>
          <div className={styles.contacts}>
            <div className={styles.contactWrapper}>
              <img src={"/pngs/phoneWhite.png"} alt="phone" />
              <span className={cn(styles.phoneNumber, "poppins-bold")}>
                {" "}
                818 747 2470
              </span>
            </div>
            <div className={styles.contactWrapper}>
              <img src={"/pngs/email.png"} alt="email" />
              <span className={cn(styles.phoneNumber, "poppins-bold")}>
                {" "}
                818-570-7990
              </span>
            </div>
          </div>
          <span className={cn(styles.additionalContact, "poppins-regular")}>
            After Hours Medical Emergency:
          </span>
          <span className={cn(styles.additionalContact, "poppins-regular")}>
            818-570-7960
          </span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.sitemapWrapper}>
          <div className={styles.sitemap}>
            <h6 className={cn(styles.sitemapTitle, "poppins-medium")}>
              Sitemap
            </h6>
            <div className={cn(styles.sitemapItems, "poppins-regular")}>
              <span>Home</span>
              <span>About</span>
              <span>All treatments</span>
              <span>Blog</span>
              <span>Specials</span>
              <span>Botox treatments</span>
              <span>Facial contouring</span>
              <span>Fat Dissolving</span>
              <span>Chemical peels</span>
              <span>Vitamin therapy</span>
              <span>Biorevitalization</span>
              <span>Microneedling</span>
              <span>Morpheus 8</span>
              <span>Facial</span>
              <span>IPL Phototherapy</span>
              <span>Laser hair removal</span>
              <span>Sculptra</span>
            </div>
          </div>
          <div className={styles.openHours}>
            <div className={styles.hours}>
              <span className={cn(styles.infoTitle, "poppins-medium")}>
                OPEN HOURS (BY APPOINTMENT ONLY)
              </span>
              <span className={cn(styles.infoTitle, "poppins-regular")}>
                Monday-Friday: 10am - 5pm
              </span>
              <span className={cn(styles.note, "poppins-light-italic")}>
                Please note: Closed For Lunch (1pm-2pm)
              </span>
            </div>
            <div className={styles.address}>
              <span className={cn(styles.infoTitle, "poppins-medium")}>
                OUR ADDRESS
              </span>
              <span className={cn(styles.note, "poppins-regular")}>
                10651 Riverside Drive Toluca Lake, CA 91602 newglow@yahoo.com
              </span>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.accessibility}>
          <span>Accessibility Statement</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <Link to="/" className={styles.logo}>
        <div
          className={styles.logoSvg}
          style={{ backgroundImage: `url(${LogoSVGWhite})` }}
        ></div>
      </Link>
    </div>
  );
};
