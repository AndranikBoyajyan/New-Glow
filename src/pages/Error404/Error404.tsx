import { Link } from "react-router";
import Title from "../../shared/Title";
import cn from "classnames";

import styles from "./Error404.module.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";

export const ErrorPage = () => {
  const { width } = useWindowSize();
  return (
    <div className={styles.errorPage}>
      <div className={styles.contentWrapper}>
        <div className={styles.errorPageLeftSide}>
          <div className={styles.errorPageTitleWrapper}>
            <Title
              text="404"
              font="fjalla-one-regular"
              className={
                width >= MEDIA_TABLET_SMALL ? "title_h1_170" : "title_h1_124"
              }
              isH1
            />
            <Title
              text="Page Not Found"
              font="poppins-regular"
              className={width >= MEDIA_TABLET_SMALL ? "title_48" : "title_28"}
            />
          </div>
          <div className={styles.errorPageRedirect}>
            <span className={cn(styles.redirectText, "poppins-regular")}>
              Looks like this page wandered off.
            </span>
            <span className={cn(styles.redirectText, "poppins-regular")}>
              Let's take you back to{" "}
              <Link to="/" className={styles.Link}>
                <span className={cn(styles.redirectText, "poppins-semibold")}>
                  Homepage
                </span>
              </Link>
            </span>
          </div>
        </div>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};
