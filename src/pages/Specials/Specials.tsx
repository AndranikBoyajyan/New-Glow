import ExtendedSpecial from "../../components/SpecialsComponents/ExtendedSpecial";
import JulySpecials from "../../components/SpecialsComponents/JulySpecials";
import LimitedTimeSpecial from "../../components/SpecialsComponents/LimitedTimeSpecial";
import SpecialPromo from "../../components/SpecialsComponents/SpecialPromo";

import styles from "./Specials.module.css";

export const Specials = () => {
  return (
    <div className={styles.specials}>
      <JulySpecials />
      <SpecialPromo />
      <LimitedTimeSpecial />
      <ExtendedSpecial />
    </div>
  );
};
