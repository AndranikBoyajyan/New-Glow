import FavoriteTreatments from "../../components/FavoriteTreatments";
import HomeAllTreatments from "../../components/HomeAllTreatments";
import HomeOurExperts from "../../components/HomeOurExperts";
import RadianceBegin from "../../components/RadianceBegin";
import CustomersReview from "../../components/CustomersReview";
import SpecialPromo from "../../components/SpecialPromo";
import HomeProducts from "../../components/HomeProducts";

import styles from "./Home.module.css";
import Menu from "../../components/Menu";

export const Home = () => {
  return (
    <div className={styles.home}>
      <Menu />
      <RadianceBegin />
      <FavoriteTreatments />
      <HomeAllTreatments />
      <HomeOurExperts />
      <SpecialPromo />
      <CustomersReview />
      <HomeProducts />
    </div>
  );
};
