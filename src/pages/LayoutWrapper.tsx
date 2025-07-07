import { Outlet } from "react-router";

import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import Menu from "../components/Menu";
import styles from "./styles.module.css";

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
