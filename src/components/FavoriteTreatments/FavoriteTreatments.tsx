import FavoriteTreatmentsDescription from "../../entities/FavoriteTreatmentsDescription";
import Button from "../../shared/Button";
import favoritePng1 from "/pngs/favoritePng1.png";
import favoritePng2 from "/pngs/favoritePng2.png";
import favoritePng3 from "/pngs/favoritePng3.png";

import styles from "./FavoriteTreatments.module.css";

export const FavoriteTreatments = () => {
  return (
    <div className={styles.favoriteTreatments}>
      <FavoriteTreatmentsDescription />
      <div className={styles.imgs}>
        <div className={styles.favoriteTreatment}>
          <img src={favoritePng1} alt="" />
          <Button
            className="button_transparent"
            content="Botox treatment"
            font="poppins-regular"
          />
        </div>
        <div className={styles.favoriteTreatment}>
          <img src={favoritePng2} alt="" />
          <Button
            className="button_transparent"
            content="Morpheus 8"
            font="poppins-regular"
          />
        </div>
        <div className={styles.favoriteTreatment}>
          <img src={favoritePng3} alt="" />
          <Button
            className="button_transparent"
            content="Facial"
            font="poppins-regular"
          />
        </div>
      </div>
    </div>
  );
};
