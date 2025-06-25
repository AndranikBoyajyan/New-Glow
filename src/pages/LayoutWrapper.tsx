import { Outlet } from "react-router";

import styles from "./styles.module.css";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

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
