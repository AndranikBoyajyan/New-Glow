import { BLOG_CARDS_INFO } from "../../constants/blogCardsInfo";
import cn from "classnames";
import Title from "../../shared/Title";
import fbSvg from "../../../src/assets/fb.svg";
import twitterSvg from "../../../src/assets/twitter.svg";
import linkedinSvg from "../../../src/assets/linkedIn.svg";
import linkSvg from "../../../src/assets/link.svg";
import heartSvg from "../../../src/assets/HeartSvg.svg";
import PatientsResults from "../../entities/SingleTreatmentPatientsResults";
import SingleBlogRecentPosts from "../SingleBlogRecentPosts";
import { useWindowSize } from "../../hooks/useWindowSize";
import { MEDIA_TABLET_SMALL } from "../../constants/windowSizes";
import CommentsBlock from "./CommentsBlock";
import { getBlogComments } from "../BlogCards/service/getAllComments";
import { useCallback, useEffect, useState } from "react";

import styles from "./SingleBlogPost.module.css";
import type { Comment } from "./model";

interface SingleBlogPostProps {
  slug: string;
  id: number;
}

export const SingleBlogPost = ({ slug, id }: SingleBlogPostProps) => {
  const post = BLOG_CARDS_INFO.find((post) => post.id === id);

  const { width } = useWindowSize();
  const [comments, setComments] = useState<Comment[]>([]);

  const getComments = useCallback(async () => {
    const newCommentsAndCount = await getBlogComments(String(id));

    setComments(newCommentsAndCount.comments);
  }, [id]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  const isMobile = width < MEDIA_TABLET_SMALL;

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
            {post.likeCount && (
              <div className={styles.like}>
                <span className={cn(styles.count, "poppins-regular")}>
                  {post.likeCount}
                </span>
                <img src={heartSvg} alt="" />
              </div>
            )}
          </div>
        </div>
        <div className={styles.divider}></div>
      </div>
      <CommentsBlock
        blogId={post.id}
        comments={comments}
        getComments={getComments}
      />
      <SingleBlogRecentPosts slug={slug} />
      <PatientsResults firstName="Acne detox facial (1 course completed) " />
    </div>
  );
};
