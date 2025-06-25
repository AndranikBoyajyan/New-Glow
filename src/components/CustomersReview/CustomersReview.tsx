import styles from "./customersReview.module.css";
import CustomerReviewCard from "../../entities/CustomersReviewCard";
import Title from "../../shared/Title";

const description1 = `"From the first consultation to my latest treatment, I've felt so well cared for. The clinics atmosphere is calming, and the results have exceeded my expectations."`;
const description2 = `"I had my first consultation at this clinic a few months ago, and it was the best decision I’ve made for my skin. I’ve always had dry and flaky skin, but after a series of hydrating facials and personalized treatments, my skin is completely transformed. It feels soft, hydrated, and radiant, and I don’t have to worry about the tightness I used to feel every day.  `;
const description3 = `"I’ve always been self-conscious about my dark spots, so I decided to visit this clinic based on a friend’s recommendation. From my first consultation. After a few months of consistent treatments, my skin looks brighter, the spots have faded, and I feel so much more confident going out without makeup." `;

export const CustomersReview = () => {
  return (
    <div className={styles.customers_review}>
      <div className={styles.title_wrapper}>
        <Title
          text="OUR CUSTOMERS ABOUT US"
          font="fjalla-one-regular"
          className="title_42"
        />
      </div>
      <div className={styles.reviews}>
        <div className={styles.customer_review_left}>
          <CustomerReviewCard text={description1} name="Megan W." />
          <CustomerReviewCard text={description2} name="Christina K." />
        </div>
        <div className={styles.customer_review_right}>
          <CustomerReviewCard text={description3} name="Emily D." />
        </div>
      </div>
    </div>
  );
};
