import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import cn from "classnames";
import Title from "../../shared/Title";
import fbSvg from "../../../src/assets/fb.svg";
import twitterSvg from "../../../src/assets/twitter.svg";
import linkedinSvg from "../../../src/assets/linkedIn.svg";
import linkSvg from "../../../src/assets/link.svg";
import heartSvg from "../../../src/assets/HeartSvg.svg";
import redHeart from "../../../src/assets/heart-red.svg";
import PatientsResults from "../../entities/SingleTreatmentPatientsResults";
import SingleBlogRecentPosts from "../SingleBlogRecentPosts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";
import CommentsBlock from "./CommentsBlock";
import type { Comment } from "./model";
import { useCallback, useEffect, useState } from "react";
import { addOrRemoveLike } from "../../service/endpoints/addLike";
import type { CardType } from "../../types/global.types";

import styles from "./SingleBlogPost.module.css";
import { getComments } from "../../service/endpoints/getCommentsBySlug";

interface SingleBlogPostProps {
  id: number;
  slug: string;
  viewCount: number;
  postLikeCount: number;
  commentsCount: number;
  isPostLiked: boolean;
  recentPosts: CardType[];
}

export const SingleBlogPost = ({
  id,
  slug,
  commentsCount,
  postLikeCount,
  viewCount,
  isPostLiked,
  recentPosts,
}: SingleBlogPostProps) => {
  const post = BLOG_CARDS_INFO.find((post) => post.id === id);

  const [comments, setComments] = useState<Comment[]>([]);
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const [isLiked, setIsLiked] = useState(isPostLiked);
  const [likeCount, setLikeCount] = useState(postLikeCount);
  const [commCount, setCommCount] = useState(commentsCount);

  const { width } = useWindowSize();
  const isMobile = width < MEDIA_TABLET_SMALL;

  const handleAddCount = useCallback(() => {
    setCommCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, [slug]);

  useEffect(() => {
    setCommCount(commentsCount);
  }, [commentsCount]);

  useEffect(() => {
    setLikeCount(postLikeCount);
  }, [postLikeCount]);

  useEffect(() => {
    setIsLiked(isPostLiked);
  }, [isPostLiked]);

  const handleLike = useCallback(async () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    await addOrRemoveLike(id).then((res) => setIsLiked(res));
  }, [id, isLiked]);

  if (!post) return null;

  return (
    <div className={styles.singleBlogPost}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleWrapper}>
          <Title
            text={post.title}
            font="fjalla-one-regular"
            className={isMobile ? "title_36" : "title_42"}
          />
        </div>
        <div className={cn(styles.infoWrapper, "poppins-regular")}>
          <img src={"/webpImages/Vahe.webp"} alt="Vahe" width={59} />
          <span>{post.specialistName}</span>
          <span>{post.readTime}</span>
          <span>{post.date}</span>
        </div>
        <div className={cn(styles.updated, "poppins-regular")}>
          <span>Updated: Nov 14, 2024</span>
        </div>
        <div className={styles.descriptionAndImg}>
          <img
            src={post.imgUrl}
            alt="post"
            height={500}
            className={styles.img}
          />
          <div className={styles.allDescriptions}>
            {post.allDescription?.map((desc, idx) => (
              <div
                key={desc.description.slice(0, 10) + idx}
                className={styles.descriptionWrapper}
              >
                <span className={cn(styles.subTitle, "poppins-regular")}>
                  {desc.subTitle}
                </span>
                <span className={cn(styles.description, "poppins-regular")}>
                  {desc.description}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.linksAndActions}>
          <div className={styles.links}>
            <img src={fbSvg} alt="fb" />
            <img src={twitterSvg} alt="tw" />
            <img src={linkedinSvg} alt="in" />
            <img src={linkSvg} alt="link" />
          </div>
          <div className={cn(styles.actions, "poppins-regular")}>
            <span className={styles.text}>{viewCount} Views</span>
            <span className={styles.text}>{commCount} Comment</span>
            <button className={styles.like} onClick={handleLike}>
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
        <div className={styles.divider}></div>
      </div>
      <CommentsBlock
        blogId={post.id}
        comments={comments}
        currentUser={user}
        handleAddCount={handleAddCount}
      />
      <SingleBlogRecentPosts recentPosts={recentPosts} />
      <PatientsResults firstName="Acne detox facial (1 course completed) " />
    </div>
  );
};
