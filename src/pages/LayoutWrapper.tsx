import { Outlet } from "react-router";

import Footer from "../components/GeneralComponents/Footer";
import Menu from "../components/GeneralComponents/Menu";
import styles from "./styles.module.css";
import Subscribe from "../components/GeneralComponents/Subscribe";
import { useWindowSize } from "../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../constants/windowSizes";

const LayoutWrapper = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.wrapper}>
      {!isMobile && <div className={styles.border}></div>}
      <Menu />
      <Outlet />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
