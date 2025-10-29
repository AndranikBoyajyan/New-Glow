import SingleTreatmentDescription from "../../../entities/SingleTreatmentDescription";
import cn from "classnames";
import SingleTreatmentHeader from "../../../entities/SingleTreatmentHeader";
import SingleTreatmentWhenBlock from "../../../entities/SingleTreatmentWhenBlock";
import sculptraHeaderImg from "/webpImages/sculptraHeader.webp";
import checkMarkDark from "../../../assets/checkMarkDark.svg";
import styles from "./Sculptra.module.css";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { description } from "./constants/description";
import { whenBlockTexts } from "./constants/whenBlockTexts";
import Title from "../../../shared/Title";
import { advantages } from "./constants/advantages";

export const Sculptra = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;

  return (
    <div className={styles.sculptra}>
      <div className={styles.sculptraTopSide}>
        <SingleTreatmentHeader
          isSculptraPage
          title="Sculptra"
          imgUrl={sculptraHeaderImg}
        />
        <SingleTreatmentDescription
          title={isMobile ? "Sculptra" : undefined}
          description={description}
        />
        <SingleTreatmentWhenBlock
          question={whenBlockTexts.question}
          answers={whenBlockTexts.answers}
          imgUrl={whenBlockTexts.imgUrl}
          isSculptra
        />
      </div>
      <div className={styles.advantages}>
        <div className={styles.advantagesQuestion}>
          <div>
            <Title
              text={advantages.question}
              className="title_36"
              font="fjalla-one-regular"
            />
          </div>
          <div className={styles.advantagesTexts}>
            {advantages.procedureAdvantages.map((advantage) => (
              <div className={styles.advantagesText} key={advantage}>
                <img src={checkMarkDark} alt="checkMarkDark" />
                <span className="poppins-regular">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.advantagesRecovery}>
          <Title
            text={advantages.title}
            className="title_36"
            font="fjalla-one-regular"
          />
          <div>
            <span className={cn(styles.advantageDesc, "poppins-regular")}>
              {advantages.description}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
