import { useCallback, useEffect, useState } from "react";
import BlogPageCard from "../../entities/BlogPageCard";
import { useNavigate } from "react-router";
import type { CardType } from "../../types/global.types";
import { getBlogCards } from "../../service/endpoints/getCards";
import { joinCards } from "../../helpers/joinCards";

import styles from "./BlogCards.module.css";

export const BlogCards = () => {
  const navigate = useNavigate();

  const [cardsDynamicValues, setCardsDynamicValues] = useState<CardType[]>([]);

  useEffect(() => {
    getBlogCards().then((res) => {
      setCardsDynamicValues(res);
    });
  }, []);

  const cardsToRender = joinCards(cardsDynamicValues);

  const handleNavigatePost = useCallback(
    (slug: string) => {
      navigate(`/blog/${slug}`);
    },
    [navigate]
  );

  return (
    <div className={styles.blogCards}>
      {cardsToRender.map((blogCardInfo) => (
        <BlogPageCard
          key={blogCardInfo.id}
          id={blogCardInfo.id}
          specialistName={blogCardInfo.specialistName}
          commentsCount={blogCardInfo.commentsCount}
          date={blogCardInfo.date}
          readTime={blogCardInfo.readTime}
          title={blogCardInfo.title}
          slug={blogCardInfo.slug}
          description={blogCardInfo.description}
          views={blogCardInfo.views}
          postLikeCount={blogCardInfo.likeCount}
          isPostLiked={blogCardInfo.isLiked}
          imgUrl={blogCardInfo.imgUrl}
          handleNavigatePost={handleNavigatePost}
        />
      ))}
    </div>
  );
};
