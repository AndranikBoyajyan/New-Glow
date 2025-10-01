import Title from "../../shared/Title";
import cn from "classnames";
import ForwardSvg from "../../../src/assets/forward.svg";
import EyeSvg from "../../../src/assets/EyeSvg.svg";
import CommentSvg from "../../../src/assets/CommentSvg.svg";
import heartSvg from "../../../src/assets/HeartSvg.svg";

import styles from "./BlogPageCard.module.css";

interface BlogPageCardProps {
  specialistName: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  views: number;
  comments: number;
  imgUrl: string;
  likeCount?: number;
}

export const BlogPageCard = ({
  specialistName,
  date,
  readTime,
  title,
  description,
  views,
  comments,
  imgUrl,
  likeCount,
}: BlogPageCardProps) => {
  return (
    <div className={styles.blogPageCard}>
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
            {description}
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
                {comments}
              </span>
            </div>
          </div>
          <div className={styles.like}>
            {likeCount && (
              <span className={cn(styles.count, "poppins-regular")}>
                {likeCount}
              </span>
            )}
            <img src={heartSvg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
