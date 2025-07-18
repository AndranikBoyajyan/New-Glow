import { Outlet } from "react-router";

import Footer from "../components/GeneralComponents/Footer";
import styles from "./styles.module.css";
import Subscribe from "../components/GeneralComponents/Subscribe";
import Header from "../components/GeneralComponents/Header";

const LayoutWrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
