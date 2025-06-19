import { Outlet } from "react-router";

import styles from "./styles.module.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

const LayoutWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.border}></div>
      <Menu />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
