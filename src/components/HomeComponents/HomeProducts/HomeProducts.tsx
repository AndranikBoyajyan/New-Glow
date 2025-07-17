import { PRODUCTS } from "../../../constants/products";
import ProductCard from "../../../entities/ProductCard";
import Title from "../../../shared/Title";
import styles from "./HomeProducts.module.css";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import Button from "../../../shared/Button";
import { useState } from "react";

export const HomeProducts = () => {
  const { width } = useWindowSize();
  const [isShowMore, setIsShowMore] = useState(false);
  const isMobile = width < MEDIA_TABLET_SMALL;

  return (
    <div className={styles.homeProducts}>
      <div className={styles.titleWrapper}>
        <Title text="PRODUCTS" font="fjalla-one-regular" />
      </div>
      <div
        className={
          isShowMore
            ? styles.productsContainerVisible
            : styles.productsContainer
        }
      >
        {PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            imgUrl={product.imgUrl}
            price={product.price}
          />
        ))}
      </div>
      {isMobile ? (
        <Button
          content={isShowMore ? "show less" : "show more"}
          className="button_see_more"
          handleClick={() => setIsShowMore(!isShowMore)}
        />
      ) : null}
    </div>
  );
};
