import { BLOG_CARDS_INFO } from "../constants/blogCardsInfo";
import type { CardType } from "../types/global.types";

export const joinCards = (fetchedData: CardType[]) => {
  const merged = BLOG_CARDS_INFO.map((card) => {
    const post = fetchedData.find((cardFromApi) => cardFromApi.id === card.id);

    if (!post) return card;

    return {
      ...card,
      views: post.viewCount,
      commentsCount: post.commentCount,
      likeCount: post.likeCount,
      slug: post.slug,
      isLiked: post.isLiked,
    };
  });

  return merged;
};
