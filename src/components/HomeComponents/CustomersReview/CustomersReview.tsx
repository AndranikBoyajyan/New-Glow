import styles from "./customersReview.module.css";
import CustomerReviewCard from "../../../entities/CustomersReviewCard";
import Title from "../../../shared/Title";

import { descriptions } from "./constants/descriptions";
import { descriptionsArrayMobile } from "./constants/descriptions";
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
            <div className={styles.customer_review_left}>
              <CustomerReviewCard
                text={descriptions.description1}
                name="Megan W."
              />
              <CustomerReviewCard
                text={descriptions.description2}
                name="Christina K."
              />
            </div>
            <div className={styles.customer_review_right}>
              <CustomerReviewCard
                text={descriptions.description3}
                name="Emily D."
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.customers_review}>
          <div className={styles.title_wrapper}>
            <Title text="OUR CUSTOMERS ABOUT US" font="fjalla-one-regular" />
          </div>
          <div className={styles.reviews}>
            <CustomSwiper
              slides={descriptionsArrayMobile.map((customerReview) => (
                <CustomerReviewCard
                  key={customerReview.id}
                  text={customerReview.description}
                  name={customerReview.name}
                />
              ))}
              isArrow={!isMobile}
              bulletsClassName="bullets_experts"
            />
          </div>
        </div>
      )}
    </>
  );
};
