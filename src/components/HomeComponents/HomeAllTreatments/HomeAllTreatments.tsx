import { useState } from "react";
import { TREATMENTS_CATEGORIES } from "../../../constants/treatmentsCategories";
import HomeTreatmentCard from "../../../entities/HomeTreatmentsCard";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Title from "../../../shared/Title";

import styles from "./HomeAllTreatments.module.css";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const HomeAllTreatments = () => {
  const [activeTreatment, setActiveTreatment] = useState(1);
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

  const handleSetActiveTreatment = (id: number) => {
    setActiveTreatment(id);
  };

  return (
    <div className={styles.homeAllTreatments}>
      <div className={styles.titleWrapper}>
        <Title
          text="ALL TREATMENTS"
          font="fjalla-one-regular"
          className={isMobile ? "title_32" : ""}
        />
      </div>
      <div className={styles.treatmentsContainer}>
        {!isMobile ? (
          TREATMENTS_CATEGORIES.map((treatmentCategory) => (
            <HomeTreatmentCard
              key={treatmentCategory.id}
              name={treatmentCategory.name}
              imgUrl={treatmentCategory.imgUrl}
            />
          ))
        ) : (
          <div className={styles.fill}>
            <HomeTreatmentCard
              name={TREATMENTS_CATEGORIES[activeTreatment - 1].name}
              imgUrl={TREATMENTS_CATEGORIES[activeTreatment - 1].imgUrl}
              isMobile={isMobile}
              activeTreatment={activeTreatment}
              setActiveTreatment={handleSetActiveTreatment}
            />
          </div>
        )}
      </div>
    </div>
  );
};
