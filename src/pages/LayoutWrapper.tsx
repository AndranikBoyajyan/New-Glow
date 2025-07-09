import { Outlet } from "react-router";

import Footer from "../components/GeneralComponents/Footer";
import Menu from "../components/GeneralComponents/Menu";
import styles from "./styles.module.css";
import Subscribe from "../components/GeneralComponents/Subscribe";

const LayoutWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.border}></div>
      <Menu />
      <Outlet />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
