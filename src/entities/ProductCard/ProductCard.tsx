import type { FC } from "react";
import styles from "./productCard.module.css";

interface ProductCardProps {
  name: string;
  imgUrl: string;
  price: string;
}

export const ProductCard: FC<ProductCardProps> = ({
  name,
  imgUrl,
  price,
}) => {
  return (
    <div className={styles.product_card}>
      <img src={imgUrl} alt={name} className={styles.img} />
      <span className={styles.treatment_name}>{name}</span>
      <span>{price}</span>
    </div>
  );
};
