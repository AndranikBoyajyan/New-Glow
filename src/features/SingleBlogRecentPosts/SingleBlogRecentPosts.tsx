import { useCallback } from "react";
import { useNavigate } from "react-router";
import cn from "classnames";
import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import BlogPageCard from "../../entities/BlogPageCard";
import Title from "../../shared/Title";

import styles from "./SingleBlogRecentPosts.module.css";

interface SingleBlogRecentPostsProps {
  slug: string;
}

export const SingleBlogRecentPosts = ({ slug }: SingleBlogRecentPostsProps) => {
  const latestPosts = BLOG_CARDS_INFO.slice(0, 4);

  const slugs = latestPosts.map((post) => post.slug);
  const isActive = slugs.includes(slug);

  let recentPosts = latestPosts;

  if (isActive) {
    recentPosts = latestPosts.filter((post) => post.slug !== slug);
    recentPosts.push(BLOG_CARDS_INFO[4]);
  }

  const navigate = useNavigate();

  const handleNavigatePost = useCallback(
    (slug: string) => {
      navigate(`/blog/${slug}`);
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
            key={post.title}
            specialistName={post.specialistName}
            commentsCount={post.commentsCount}
            date={post.date}
            readTime={post.readTime}
            title={post.title}
            slug={post.slug}
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
