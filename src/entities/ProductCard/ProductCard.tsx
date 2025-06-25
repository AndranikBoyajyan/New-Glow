import type { FC } from "react";
import cn from "classnames";
import styles from "./productCard.module.css";

interface ProductCardProps {
  name: string;
  imgUrl: string;
  price: string;
}

export const ProductCard: FC<ProductCardProps> = ({ name, imgUrl, price }) => {
  return (
    <div className={styles.product_card}>
      <img src={imgUrl} alt={name} className={styles.img} />
      <span className={cn(styles.treatmentName, "poppins-regular")}>
        {name}
      </span>
      <span className={cn(styles.treatmentPrice, "poppins-medium")}>
        {price}
      </span>
    </div>
  );
};
