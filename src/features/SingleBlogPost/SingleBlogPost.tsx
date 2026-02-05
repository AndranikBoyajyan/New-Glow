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
import { useCallback, useState } from "react";
import { addLike } from "./service/addLike";

import styles from "./SingleBlogPost.module.css";

interface SingleBlogPostProps {
  slug: string;
  id: number;
  comments: Comment[];
}

export const SingleBlogPost = ({ slug, id, comments }: SingleBlogPostProps) => {
  const post = BLOG_CARDS_INFO.find((post) => post.id === id);

  const [isLiked, setIsLiked] = useState(false);

  const { width } = useWindowSize();
  const isMobile = width < MEDIA_TABLET_SMALL;

  const handleLike = useCallback(async () => {
    await addLike(id).then((res) => setIsLiked(res));
  }, [id]);

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
            <span className={styles.text}>{post.views} views</span>
            <span className={styles.text}>{post.commentsCount} comments</span>
            <button className={styles.like} onClick={handleLike}>
              <span className={cn(styles.count, "poppins-regular")}>
                {post.likeCount}
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
      <CommentsBlock blogId={post.id} comments={comments} />
      <SingleBlogRecentPosts slug={slug} />
      <PatientsResults firstName="Acne detox facial (1 course completed) " />
    </div>
  );
};
