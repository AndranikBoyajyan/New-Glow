import { Outlet } from "react-router";

import Footer from "../components/GeneralComponents/Footer";
import Menu from "../components/GeneralComponents/Menu";
import styles from "./styles.module.css";
import Subscribe from "../components/GeneralComponents/Subscribe";

const LayoutWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Menu />
      <Outlet />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
