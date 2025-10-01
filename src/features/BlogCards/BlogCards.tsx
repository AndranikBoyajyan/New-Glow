import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import BlogPageCard from "../../entities/BlogPageCard";

import styles from "./BlogCards.module.css";

export const BlogCards = () => {
  return (
    <div className={styles.blogCards}>
      {BLOG_CARDS_INFO.map((blogCardInfo) => (
        <BlogPageCard
          key={blogCardInfo.id}
          specialistName={blogCardInfo.specialistName}
          comments={blogCardInfo.comments}
          date={blogCardInfo.date}
          readTime={blogCardInfo.readTime}
          title={blogCardInfo.title}
          description={blogCardInfo.description}
          views={blogCardInfo.views}
          imgUrl={blogCardInfo.imgUrl}
        />
      ))}
    </div>
  );
};
