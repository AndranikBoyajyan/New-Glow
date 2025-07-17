import { useEffect, type FC } from "react";
import TreatmentCard from "../../../entities/TreatmentCard";
import Title from "../../../shared/Title";
import type { ITreatmentCategory } from "../../../types/global.types";
import styles from "./TreatmentsContent.module.css";
import { useLocation } from "react-router";

interface TreatmentsContentProps {
  isChecked: boolean;
  category: ITreatmentCategory;
}

export const TreatmentsContent: FC<TreatmentsContentProps> = ({
  isChecked,
  category,
}) => {
  const { treatments, name: categoryName, id } = category;

  const location = useLocation();

  const urlParamsName = categoryName.replaceAll(" ", "-").toLowerCase();

  console.log({
    location,
    repl: location.hash.replace("#", ""),
    scroll: location.state,
  });

  useEffect(() => {
    if (location.state?.scrollTo) {
      const category = document.getElementById(location.state.scrollTo);
      if (category) {
        category.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (location.hash) {
      const category = document.getElementById(location.hash.replace("#", ""));

      if (category) {
        category.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state, location.hash]);

  if (!isChecked) return null;

  return (
    <div className={styles.content} id={urlParamsName}>

      <Title
        text={categoryName}
        font="fjalla-one-regular"
        className="title_40"
      />
      <div>
        {treatments.map((treatment, index) => (
          <TreatmentCard
            key={treatment.id}
            name={treatment.name}
            imgUrl={treatment.imgUrl}
            description={treatment.description}
            isRight={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};
