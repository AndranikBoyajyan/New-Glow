import type { FC } from "react";
import cn from "classnames";
import styles from "./customerReviewCard.module.css";
import commaRight from "/webpImages/commaRight.webp";
import commaLeft from "/webpImages/commaLeft.webp";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";

interface CustomerReviewCardProps {
  text: string;
  name: string;
}

export const CustomerReviewCard: FC<CustomerReviewCardProps> = ({
  text,
  name,
}) => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <div className={styles.customer_review_card}>
      {!isMobile && (
        <img src={commaRight} alt="" className={styles.comma_right} />
      )}
      {!isMobile && (
        <img src={commaLeft} alt="" className={styles.comma_left} />
      )}
      <p className={cn(styles.description, "poppins-regular")}>{text}</p>
      <p className={cn(styles.reviewer_name, "poppins-semibold")}>{name}</p>
    </div>
  );
};
