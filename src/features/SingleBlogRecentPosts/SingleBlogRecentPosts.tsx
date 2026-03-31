import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import cn from "classnames";
import BlogPageCard from "../../entities/BlogPageCard";
import Title from "../../shared/Title";
import type { CardType, IBlogCardsInfo } from "../../types/global.types";
import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";

import styles from "./SingleBlogRecentPosts.module.css";

interface SingleBlogRecentPostsProps {
  recentPosts: CardType[];
}

export const SingleBlogRecentPosts = ({
  recentPosts,
}: SingleBlogRecentPostsProps) => {
  const [recPosts, setRecPosts] = useState<IBlogCardsInfo[]>([]);

  const mergedCards = useMemo(() => {
    return recentPosts.map((recentPost) => {
      const card = BLOG_CARDS_INFO.find((card) => card.id === recentPost.id);

      return {
        ...card,
        isLiked: recentPost.isLiked,
        views: recentPost.viewCount,
        likeCount: recentPost.likeCount,
        commentsCount: recentPost.commentCount,
        slug: recentPost.slug,
      };
    }) as IBlogCardsInfo[];
  }, [recentPosts]);

  useEffect(() => {
    setRecPosts(mergedCards);
  }, [mergedCards]);

  const navigate = useNavigate();

  const handleNavigatePost = useCallback(
    (slug: string) => {
      navigate(`/blog/${slug}`);
    },
    [navigate]
  );

  const handleSeeAllPosts = () => {
    navigate("/blog");
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
        {recPosts.map((post) => (
          <BlogPageCard
            key={post.title}
            id={post.id}
            specialistName={post.specialistName}
            commentsCount={post.commentsCount}
            date={post.date}
            readTime={post.readTime}
            title={post.title}
            slug={post.slug}
            description={post.description}
            views={post.views}
            isPostLiked={post.isLiked}
            postLikeCount={post.likeCount}
            handleNavigatePost={handleNavigatePost}
            imgUrl={post.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};
