import cn from "classnames";

import styles from "./AboutPageDescription.module.css";

export const AboutPageDescription = () => {
  return (
    <div className={styles.descriptionWrapper}>
      <span className={cn(styles.description, "poppins-light")}>
        Led by experienced medical professionals, NewGlow offers a curated range
        of non-invasive and minimally invasive procedures—from skin rejuvenation
        and anti-aging therapies to body contouring and cosmetic enhancements.
        We combine medical expertise with a deep understanding of aesthetics to
        deliver results that feel as good as they look.
      </span>
      <span className={cn(styles.description, "poppins-light")}>
        At the heart of NewGlow is a commitment to your comfort, privacy, and
        satisfaction. Whether you're beginning your skincare journey or seeking
        subtle refinements.
      </span>
    </div>
  );
};
