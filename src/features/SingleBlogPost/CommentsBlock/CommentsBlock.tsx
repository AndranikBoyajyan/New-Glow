import Button from "../../../shared/Button";
import cn from "classnames";
import Title from "../../../shared/Title";
import type { Comment, Form } from "../model";
import { addComment } from "../../../service/endpoints/addComment";

import styles from "./CommentsBlock.module.css";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

interface CommentsBlockProps {
  blogId: number;
  comments: Comment[];
  handleAddCount: () => void;
}

export const CommentsBlock = ({
  blogId,
  comments,
  handleAddCount,
}: CommentsBlockProps) => {
  const [allComments, setAllComments] = useState(comments);

  const { control, handleSubmit, reset } = useForm<Form>({
    defaultValues: {
      comment: "",
    },
  });

  const handleAddComment = async ({ comment }: Form) => {
    handleAddCount();
    const newComment: Comment = {
      blog_id: blogId,
      comment,
      createdAt: String(Date.now()),
      id: Math.random(),
      user_id: Math.random(),
    };
    setAllComments((prev) => [...prev, newComment]);
    await addComment(comment, blogId);
    reset();
  };

  return (
    <div className={styles.comments}>
      <Title text="Comments" font="fjalla-one-regular" />
      <div className={styles.content}>
        <div className={styles.commentsWrapper}>
          {allComments.map((comm) => (
            <div className={styles.commentBlock} key={comm.id}>
              <p className={cn(styles.userName, "poppins-medium")}>
                {comm.user_id <= 1 ? "YOU" : "USER" + comm.user_id}
              </p>
              <span className={cn(styles.comment, "poppins-regular")}>
                {comm.comment}
              </span>
            </div>
          ))}
        </div>
        <form className={styles.form} onSubmit={handleSubmit(handleAddComment)}>
          <Controller
            control={control}
            name="comment"
            render={({ field: { onBlur, onChange, value } }) => {
              return (
                <input
                  name="comment"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              );
            }}
          />
          <Button isPrevent={false} className="button_send" content=">" />
        </form>
      </div>
    </div>
  );
};
