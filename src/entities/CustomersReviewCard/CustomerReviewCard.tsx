import type { FC } from "react";
import cn from "classnames";
import styles from "./customerReviewCard.module.css";
import commaRight from "/pngs/commaRight.png";
import commaLeft from "/pngs/commaLeft.png";

interface CustomerReviewCardProps {
  text: string;
  name: string;
}

export const CustomerReviewCard: FC<CustomerReviewCardProps> = ({
  text,
  name,
}) => {
  return (
    <div className={styles.customer_review_card}>
      <img src={commaRight} alt="" className={styles.comma_right} />
      <img src={commaLeft} alt="" className={styles.comma_left} />
      <p className={cn(styles.description, "poppins-regular")}>{text}</p>
      <p className={cn(styles.reviewer_name, "poppins-regular")}>{name}</p>
    </div>
  );
};
