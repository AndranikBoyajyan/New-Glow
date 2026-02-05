import { useCallback, useEffect, useMemo, useState } from "react";
import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import BlogPageCard from "../../entities/BlogPageCard";

import styles from "./BlogCards.module.css";
import { useNavigate } from "react-router";
import { getBlogCards } from "./service/getCards";
import type { CardType } from "./model";

export const BlogCards = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState<CardType[]>([]);

  // esi hanvelu a global state vor sax texer@ chisht tvyal ereva
  const joinedCards = useMemo(
    () =>
      BLOG_CARDS_INFO.map((card) => {
        const post = cards.find((cardFromApi) => cardFromApi.id === card.id);

        if (!post) {
          return card;
        }

        card.views = post.viewCount ?? 0;
        card.commentsCount = post.commentCount ?? 0;
        card.likeCount = post.likeCount ?? 0;

        return {
          ...card,
        };
      }),
    [cards]
  );

  useEffect(() => {
    getBlogCards().then((res) => setCards(res));
  }, []);

  const handleNavigatePost = useCallback(
    (slug: string) => {
      navigate(`/blog/${slug}`);
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  return (
    <div className={styles.blogCards}>
      {joinedCards.map((blogCardInfo) => (
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
          likeCount={blogCardInfo.likeCount}
          imgUrl={blogCardInfo.imgUrl}
          handleNavigatePost={handleNavigatePost}
        />
      ))}
    </div>
  );
};
