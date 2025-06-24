import FavoriteTreatments from "../../components/FavoriteTreatments";
import HomeAllTreatments from "../../components/HomeAllTreatments";
import HomeOurExperts from "../../components/HomeOurExperts";
import RadianceBegin from "../../components/RadianceBegin";
import CustomersReview from "../../components/CustomersReview";

import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div className={styles.home}>
      <RadianceBegin />
      <FavoriteTreatments />
      <HomeAllTreatments />
      <HomeOurExperts />
      <CustomersReview />
    </div>
  );
};
