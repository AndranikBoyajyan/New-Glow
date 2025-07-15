import styles from "./customersReview.module.css";
import CustomerReviewCard from "../../../entities/CustomersReviewCard";
import Title from "../../../shared/Title";

import cn from "classnames";
import { descriptionsArray } from "./constants/descriptions";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../../constants/windowSizes";
import CustomSwiper from "../../../features/CustomSwiper";

export const CustomersReview = () => {
  const { width } = useWindowSize();

  const isMobile = width < MEDIA_TABLET_SMALL;
  return (
    <>
      {!isMobile ? (
        <div className={styles.customers_review}>
          <div className={styles.title_wrapper}>
            <Title text="OUR CUSTOMERS ABOUT US" font="fjalla-one-regular" />
          </div>
          <div className={styles.reviews}>
            {descriptionsArray.map((customerReview) => (
              <div
                key={customerReview.id}
                className={cn(
                  styles[`customer_review_${customerReview.side}`],
                  styles[
                    `customer_review_${customerReview.side + customerReview.id}`
                  ]
                )}
              >
                <CustomerReviewCard
                  text={customerReview.description}
                  name={customerReview.name}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.customers_review}>
          <div className={styles.title_wrapper}>
            <Title text="OUR CUSTOMERS ABOUT US" font="fjalla-one-regular" />
          </div>
          <div className={styles.reviews}>
            <CustomSwiper
              slides={descriptionsArray.map((customerReview) => (
                <CustomerReviewCard
                  key={customerReview.id}
                  text={customerReview.description}
                  name={customerReview.name}
                />
              ))}
              bulletsClassName="bullets_customerReview"
            />
          </div>
        </div>
      )}
    </>
  );
};
