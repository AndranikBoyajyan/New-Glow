import { useCallback } from "react";
import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import BlogPageCard from "../../entities/BlogPageCard";

import styles from "./BlogCards.module.css";
import { useNavigate } from "react-router";

// interface Card {
//   id: number;
//   slug: string;
//   views: number;
//   comments: string[];
//   likeCount: number;
// }

export const BlogCards = () => {
  const navigate = useNavigate();

  // const [cards, setCards] = useState<Card[]>([]);

  // frontum mtacum ei unenayi senc interface en inch@ dinamika u
  // backic a galis senc pahei u nkarei lav tarberak a @st qez?

  const handleNavigatePost = useCallback(
    (slug: string) => {
      navigate(`/blog/${slug}`);
      return window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [navigate]
  );

  return (
    <div className={styles.blogCards}>
      {BLOG_CARDS_INFO.map((blogCardInfo) => (
        <BlogPageCard
          key={blogCardInfo.id}
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
