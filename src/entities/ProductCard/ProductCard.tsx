import type { FC } from "react";
import cn from "classnames";
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
    <div className={cn(styles["conatiner"])}>
      <img src={imgUrl} alt={name} className={styles.img} />
      <span className={cn(styles["treatment-name"])}>{name}</span>
      <span>{price}</span>
    </div>
  );
};
