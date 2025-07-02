import { SPECIALISTS } from "../../constants/specialists";
import AboutPageCard from "../../entities/AboutPageCard";

import styles from "./AboutCards.module.css";

export const AboutCards = () => {
  return (
    <div className={styles.aboutCards}>
      {SPECIALISTS.map((specialist) => (
        <AboutPageCard
          key={specialist.id}
          img={specialist.imgUrl}
          name={specialist.name}
          profession={specialist.profession}
          description={specialist.description}
        />
      ))}
    </div>
  );
};
