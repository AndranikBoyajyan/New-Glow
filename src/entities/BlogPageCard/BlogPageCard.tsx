import Title from "../../shared/Title";
import cn from "classnames";
import ForwardSvg from "../../../src/assets/forward.svg";
import EyeSvg from "../../../src/assets/EyeSvg.svg";
import CommentSvg from "../../../src/assets/CommentSvg.svg";
import heartSvg from "../../../src/assets/HeartSvg.svg";
import redHeart from "../../../src/assets/heart-red.svg";

import styles from "./BlogPageCard.module.css";
import { useCallback, useEffect, useState } from "react";
import { addOrRemoveLike } from "../../service/endpoints/addLike";

interface BlogPageCardProps {
  id: number;
  specialistName: string;
  date: string;
  readTime: string;
  title: string;
  slug: string;
  description: string;
  views: number;
  commentsCount: number;
  isPostLiked: boolean;
  imgUrl: string;
  postLikeCount: number;
  handleNavigatePost: (slug: string) => void;
}

export const BlogPageCard = ({
  id,
  specialistName,
  date,
  readTime,
  title,
  slug,
  description,
  views,
  commentsCount,
  isPostLiked,
  imgUrl,
  postLikeCount,
  handleNavigatePost,
}: BlogPageCardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(isPostLiked);
  const [likeCount, setLikeCount] = useState<number>(postLikeCount);

  const handleLike = useCallback(async () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    await addOrRemoveLike(id).then((res) => setIsLiked(res));
  }, [id, isLiked]);

  useEffect(() => {
    setIsLiked(isPostLiked);
  }, [isPostLiked]);

  useEffect(() => {
    setLikeCount(postLikeCount);
  }, [postLikeCount]);

  return (
    <div
      className={styles.blogPageCard}
      onClick={() => handleNavigatePost(slug)}
    >
      <div
        className={styles.blogPageCardImg}
        style={{ backgroundImage: `url(${imgUrl})` }}
      ></div>
      <div className={styles.content}>
        <div className={styles.nameDateAndTitle}>
          <div className={styles.nameWrapper}>
            <span className={cn(styles.specialistName, "poppins-regular")}>
              {specialistName}
            </span>
            <img src={ForwardSvg} alt="" />
          </div>
          <div className={styles.dateAndReadTime}>
            <span className={cn(styles.date, "poppins-light-italic")}>
              {date}
            </span>
            <span className={cn(styles.readTime, "poppins-light-italic")}>
              {readTime}
            </span>
          </div>
          <Title
            text={title}
            font="fjalla-one-regular"
            className="title_18_textColor"
          />
        </div>
        <div className={styles.descriptionWrapper}>
          <span className={cn(styles.description, "poppins-regular")}>
            {description}...
          </span>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.actions}>
          <div className={styles.viewsAndComments}>
            <div className={styles.views}>
              <img src={EyeSvg} alt="" />
              <span className={cn(styles.count, "poppins-regular")}>
                {views}
              </span>
            </div>
            <div className={styles.comments}>
              <img src={CommentSvg} alt="" />
              <span className={cn(styles.count, "poppins-regular")}>
                {commentsCount}
              </span>
            </div>
          </div>
          <button
            className={styles.like}
            onClick={async (e) => {
              e.stopPropagation();
              await handleLike();
            }}
          >
            <span className={cn(styles.count, "poppins-regular")}>
              {likeCount}
            </span>
            {!isLiked ? (
              <img src={heartSvg} alt="empty-heart" />
            ) : (
              <img src={redHeart} alt="red-heart" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
