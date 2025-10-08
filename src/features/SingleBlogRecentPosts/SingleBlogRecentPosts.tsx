import { useCallback } from "react";
import { useNavigate } from "react-router";
import cn from "classnames";
import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import BlogPageCard from "../../entities/BlogPageCard";
import Title from "../../shared/Title";

import styles from "./SingleBlogRecentPosts.module.css";

interface SingleBlogRecentPostsProps {
  id: number;
}

export const SingleBlogRecentPosts = ({ id }: SingleBlogRecentPostsProps) => {
  const latestPosts = BLOG_CARDS_INFO.slice(0, 4);

  const ids = latestPosts.map((post) => post.id);
  const isActive = ids.includes(id);

  let recentPosts = latestPosts;

  if (isActive) {
    recentPosts = latestPosts.filter((post) => post.id !== id);
    recentPosts.push(BLOG_CARDS_INFO[4]);
  }

  const navigate = useNavigate();

  const handleNavigatePost = useCallback(
    (id: number) => {
      navigate(`/blog/${id}`);
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  const handleSeeAllPosts = () => {
    navigate("/blog");
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.singleBlogRecentPosts}>
      <div className={styles.titleWrapper}>
        <Title text="Recent Posts" font="fjalla-one-regular" />
        <span
          onClick={handleSeeAllPosts}
          className={cn(styles.seeAll, "poppins-regular")}
        >
          See All
        </span>
      </div>
      <div className={styles.blogRecentPosts}>
        {recentPosts.map((post) => (
          <BlogPageCard
            key={post.id}
            id={post.id}
            specialistName={post.specialistName}
            commentsCount={post.commentsCount}
            date={post.date}
            readTime={post.readTime}
            title={post.title}
            description={post.description}
            views={post.views}
            handleNavigatePost={handleNavigatePost}
            imgUrl={post.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};
