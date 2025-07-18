import { Outlet } from "react-router";

import Footer from "../components/GeneralComponents/Footer";
import styles from "./styles.module.css";
import Subscribe from "../components/GeneralComponents/Subscribe";
import { useWindowSize } from "../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../constants/windowSizes";
import Header from "../components/GeneralComponents/Header";

const LayoutWrapper = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.wrapper}>
      {!isMobile && <div className={styles.border}></div>}
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
