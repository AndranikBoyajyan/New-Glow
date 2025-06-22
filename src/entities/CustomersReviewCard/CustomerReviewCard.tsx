import type { FC } from "react";
import styles from "./customerReviewCard.module.css";

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
      <img src="./pngs/commaRight.png" alt="" className={styles.comma_right}/>
      <img src="./pngs/commaLeft.png" alt="" className={styles.comma_left}/>
      <p>{text}</p>
      <p className={styles.reviewer_name}>{name}</p>
    </div>
  );
};
