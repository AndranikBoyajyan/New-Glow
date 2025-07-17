import { TREATMENTS_CATEGORIES } from "../../../constants/treatmentsCategories";
import HomeTreatmentCard from "../../../entities/HomeTreatmentsCard";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Title from "../../../shared/Title";

import styles from "./HomeAllTreatments.module.css";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import CustomSwiper from "../../../features/CustomSwiper";

export const HomeAllTreatments = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

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
              id={treatmentCategory.id.toString()}
            />
          ))
        ) : (
          <CustomSwiper
            slides={TREATMENTS_CATEGORIES.map((category) => (
              <HomeTreatmentCard
                key={category.id}
                name={category.name}
                imgUrl={category.imgUrl}
                id={category.id.toString()}
              />
            ))}
            bulletsClassName="bullets_home_all_treatments"
          />
        )}
      </div>
    </div>
  );
};
