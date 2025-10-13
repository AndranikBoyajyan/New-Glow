import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import microneedlingHeaderImg from "/pngs/microneedlingHeaderImg.png";
import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import { description } from "./constants/description";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";

import { whenBlockTexts } from "./constants/whenBlockTexts";
import { cardsInfos } from "./constants/cardsInfo";
import TreatmentPageCard from "../../../entities/TreatmentPageCard";
import styles from "./Microneedling.module.css";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";

export const Microneedling = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.microneedling}>
      <div className={styles.microneedlingTopSide}>
        <SingleTreatmentHeader
          title="Microneedling"
          imgUrl={microneedlingHeaderImg}
        />
        <SingleTreatmentDescription
          title={isMobile ? "Microneedling" : undefined}
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
