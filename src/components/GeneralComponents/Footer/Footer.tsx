import { useState } from "react";
import cn from "classnames";
import footerImg from "/pngs/footerImg.png";
import Subscribe from "../Subscribe";
import LogoSVGWhite from "../../../assets/logoSvgWhite.svg";
import { Link } from "react-router";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { getTreatmentPath } from "../../../helpers/getTreatmentPath";
import { TREATMENTS } from "../../../constants/treatments";
import MapModal from "../../../features/MapModal";

import styles from "./Footer.module.css";

export const Footer = () => {
  const { width } = useWindowSize();
  const [isMapOpen, setIsMapOpen] = useState(false);

  const isMobile = width < MEDIA_TABLET_SMALL;

  const handleRedirect = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={cn(styles.footer, "poppins-regular")}>
      <div className={styles.topSideWithDivider}>
        <div className={styles.footerTopSideWrapper}>
          <Subscribe />
          {!isMobile && (
            <div
              className={styles.footerImg}
              style={{
                backgroundImage: `url(${footerImg})`,
              }}
            ></div>
          )}
        </div>
        {!isMobile && <div className={styles.divider}></div>}
      </div>
      <div className={styles.texts}>
        <div className={styles.topSide}>
          <div className={styles.contacts}>
            <div className={styles.contactWrapper}>
              <img src={"/pngs/phoneWhite.png"} alt="phone" />
              <Link to={"tel:+18187472470"} className={styles.phoneNumberLink}>
                <span className={cn(styles.phoneNumber, "poppins-regular")}>
                  {" "}
                  818 747 2470
                </span>
              </Link>
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
              <Link
                className={styles.sitemapLink}
                to={"/"}
                onClick={handleRedirect}
              >
                <span>Home</span>
              </Link>
              <Link
                className={styles.sitemapLink}
                to={"/about"}
                onClick={handleRedirect}
              >
                <span>About</span>
              </Link>
              <Link
                className={styles.sitemapLink}
                to={"/all-treatments"}
                onClick={handleRedirect}
              >
                <span>All treatments</span>
              </Link>
              <Link
                className={styles.sitemapLink}
                to={"/blog"}
                onClick={handleRedirect}
              >
                <span>Blog</span>
              </Link>
              <Link
                className={styles.sitemapLink}
                to={"/specials"}
                onClick={handleRedirect}
              >
                <span>Specials</span>
              </Link>
              {TREATMENTS.map((treatment) => (
                <Link
                  key={treatment.id}
                  className={styles.sitemapLink}
                  to={`/${getTreatmentPath(treatment.name)}`}
                  onClick={handleRedirect}
                >
                  <span>{treatment.name}</span>
                </Link>
              ))}
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
                <button
                  className={cn(styles.addressButton, "poppins-regular")}
                  onClick={() => setIsMapOpen(true)}
                >
                  10651 Riverside Drive Toluca Lake, CA 91602
                </button>
                <Link
                  to={"mailto:newglow@yahoo.com"}
                  className={styles.phoneNumberLink}
                >
                  <span>newglow@yahoo.com</span>
                </Link>
              </span>
              {isMapOpen && (
                <MapModal
                  open={isMapOpen}
                  address="10651 Riverside Drive Toluca Lake, CA 91602"
                  onClose={() => setIsMapOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.accessibility}>
          <span>Accessibility Statement</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={styles.logo}
      >
        <div
          className={styles.logoSvg}
          style={{ backgroundImage: `url(${LogoSVGWhite})` }}
        ></div>
      </Link>
    </div>
  );
};
