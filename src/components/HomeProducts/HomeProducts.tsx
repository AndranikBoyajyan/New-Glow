import { PRODUCTS } from "../../constants/products";
import ProductCard from "../../entities/ProductCard";
import Title from "../../shared/Title";
import styles from "./HomeProducts.module.css";

export const HomeProducts = () => {
  return (
    <div className={styles.homeProducts}>
      <div className={styles.titleWrapper}>
        <Title text="PRODUCTS" font="fjalla-one-regular" className="title_42" />
      </div>
      <div className={styles.productsContainer}>
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            imgUrl={product.imgUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
