import { useCallback, useEffect, useState } from "react";
import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import BlogPageCard from "../../entities/BlogPageCard";

import styles from "./BlogCards.module.css";
import { useNavigate } from "react-router";
import { getBlogViews } from "./service/getBlogViews";
import { getBlogCards } from "./service/getCards";
import type { CardType, ViewsType } from "./model";

export const BlogCards = () => {
  const navigate = useNavigate();

  const [views, setViews] = useState<ViewsType[]>([]);
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    getBlogViews().then((res) => setViews(res));
    getBlogCards().then((res) => setCards(res));
  }, []);

  const cardsToRender = BLOG_CARDS_INFO.map((card) => {
    const slug =
      cards.find((cardFromApi) => cardFromApi.id === card.id)?.slug ?? "";
    card.slug = slug;
    card.views = views.find((view) => view.blog_id === card.id)?.count ?? 0;

    return {
      ...card,
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
          slug={blogCardInfo.slug}
          description={blogCardInfo.description}
          views={blogCardInfo.views}
          imgUrl={blogCardInfo.imgUrl}
          handleNavigatePost={handleNavigatePost}
        />
      ))}
    </div>
  );
};
