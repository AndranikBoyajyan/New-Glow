import { useCallback, useEffect, useState } from "react";
import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import BlogPageCard from "../../entities/BlogPageCard";

import styles from "./BlogCards.module.css";
import { useNavigate } from "react-router";
import { getBlogViews } from "./service/getBlogViews";
import { getBlogCards } from "./service/getCards";

export const BlogCards = () => {
  const navigate = useNavigate();

  const [views, setViews] = useState<Record<string, number>>({});
  const [cards, setCards] = useState<{ id: number; slug: string }[]>([]);

  const blogCardIds = Object.keys(views);

  const getViews = useCallback(async () => {
    const currentViews = await getBlogViews();

    setViews(currentViews);
  }, []);

  const getCards = useCallback(async () => {
    const cards = await getBlogCards();

    setCards(cards);
  }, []);

  useEffect(() => {
    getViews();
    getCards();
  }, [getViews, getCards]);

  const cardsToRender = BLOG_CARDS_INFO.map((card) => {
    const postId =
      blogCardIds.find((cardId) => Number(cardId) === card.id) ?? "";

    const viewCount = views[postId];
    const slug = cards.find((cardFromApi) => cardFromApi.id === card.id)?.slug;
    card.slug = slug ?? ""; // kastila che es moment@?

    // add comments and likes
    return {
      ...card,
      views: viewCount,
      slug,
    };
  });

  const handleNavigatePost = useCallback(
    (slug: string) => {
      navigate(`/blog/${slug}`);
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  return (
    <div className={styles.blogCards}>
      {cardsToRender.map((blogCardInfo) => (
        <BlogPageCard
          key={blogCardInfo.id}
          specialistName={blogCardInfo.specialistName}
          commentsCount={blogCardInfo.commentsCount}
          date={blogCardInfo.date}
          readTime={blogCardInfo.readTime}
          title={blogCardInfo.title}
          slug={blogCardInfo.slug ?? ""}
          description={blogCardInfo.description}
          views={blogCardInfo.views}
          imgUrl={blogCardInfo.imgUrl}
          handleNavigatePost={handleNavigatePost}
        />
      ))}
    </div>
  );
};
