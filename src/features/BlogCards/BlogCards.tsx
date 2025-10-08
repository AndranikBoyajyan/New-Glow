import { useCallback } from "react";
import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import BlogPageCard from "../../entities/BlogPageCard";

import styles from "./BlogCards.module.css";
import { useNavigate } from "react-router";

export const BlogCards = () => {
  const navigate = useNavigate();

  const handleNavigatePost = useCallback(
    (id: number) => {
      navigate(`/blog/${id}`);
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  return (
    <div className={styles.blogCards}>
      {BLOG_CARDS_INFO.map((blogCardInfo) => (
        <BlogPageCard
          key={blogCardInfo.id}
          id={blogCardInfo.id}
          specialistName={blogCardInfo.specialistName}
          commentsCount={blogCardInfo.commentsCount}
          date={blogCardInfo.date}
          readTime={blogCardInfo.readTime}
          title={blogCardInfo.title}
          description={blogCardInfo.description}
          views={blogCardInfo.views}
          imgUrl={blogCardInfo.imgUrl}
          handleNavigatePost={handleNavigatePost}
        />
      ))}
    </div>
  );
};
