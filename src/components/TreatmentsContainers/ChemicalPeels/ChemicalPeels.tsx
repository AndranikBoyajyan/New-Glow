import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import chemicalPeelsHeaderImg from "/webpImages/chemicalPeelsHeaderImg.webp";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import styles from "./ChemicalPeels.module.css";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const ChemicalPeels = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

  return (
    <div className={styles.chemicalPeels}>
      <div className={styles.chemicalPeelsTopSide}>
        <SingleTreatmentHeader
          title="Chemical Peels"
          imgUrl={chemicalPeelsHeaderImg}
        />
        <SingleTreatmentDescription
          title={isMobile ? "Chemical Peels" : undefined}
          description={description}
        />
        <SingleTreatmentWhenBlock
          question={whenBlockTexts.question}
          answers={whenBlockTexts.answers}
          imgUrl={whenBlockTexts.imgUrl}
        />
      </div>
      <div className={styles.cards}>
        {cardsInfos.map((cardInfo) => (
          <TreatmentPageCard key={cardInfo.id} {...cardInfo} />
        ))}
      </div>
    </div>
  );
};
