import FavoriteTreatments from "../../components/HomeComponents/FavoriteTreatments";
import HomeAllTreatments from "../../components/HomeComponents/HomeAllTreatments";
import HomeOurExperts from "../../components/HomeComponents/HomeOurExperts";
import CustomersReview from "../../components/HomeComponents/CustomersReview";
import RadianceBegin from "../../components/HomeComponents/RadianceBegin";
import SpecialPromo from "../../components/SpecialsComponents/SpecialPromo";
import HomeProducts from "../../components/HomeComponents/HomeProducts";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
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
