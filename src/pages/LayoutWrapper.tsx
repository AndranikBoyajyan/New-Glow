import { Outlet } from "react-router";

import styles from "./styles.module.css";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";

const LayoutWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.border}></div>
      <Outlet />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
