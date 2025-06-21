import FavoriteTreatments from "../../components/FavoriteTreatments";
import RadianceBegin from "../../components/RadianceBegin";
 
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <div className={styles.home}>
      <RadianceBegin />
      <FavoriteTreatments />
    </div>
  );
};
