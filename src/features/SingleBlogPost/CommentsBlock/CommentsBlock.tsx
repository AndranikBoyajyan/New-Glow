import Button from "../../../shared/Button";
import cn from "classnames";
import Title from "../../../shared/Title";
import type { Comment, CommentCreator, Form } from "../model";
import { addComment } from "../../../service/endpoints/addComment";
import deleteSvg from "../../../assets/delete.svg";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import styles from "./CommentsBlock.module.css";
import { deleteComment } from "../../../service/endpoints/deleteComment";

interface CommentsBlockProps {
  blogId: number;
  comments: Comment[];
  currentUser: CommentCreator;
  handleAddCount: () => void;
}

export const CommentsBlock = ({
  blogId,
  comments,
  currentUser,
  handleAddCount,
}: CommentsBlockProps) => {
  const [allComments, setAllComments] = useState(comments);

  const { control, handleSubmit, reset } = useForm<Form>({
    defaultValues: {
      comment: "",
    },
  });

  useEffect(() => {
    setAllComments(comments);
  }, [comments]);

  const handleAddComment = async ({ comment }: Form) => {
    handleAddCount();
    const newComment: Comment = {
      blog_id: blogId,
      comment,
      createdAt: String(Date.now()),
      id: Math.random(),
      user_id: currentUser.id,
    };
    setAllComments((prev) => [...prev, newComment]);
    await addComment(comment, blogId);
    reset();
  };

  const deleteCommentById = async (id: number) => {
    await deleteComment(id);
    setAllComments((prev) => prev.filter((comment) => comment.id !== id));
  };

  return (
    <div className={styles.comments}>
      <Title text="Comments" font="fjalla-one-regular" />
      <div className={styles.content}>
        <div className={styles.commentsWrapper}>
          {allComments.map((comm) => (
            <div className={styles.commentBlock} key={comm.id}>
              <p className={cn(styles.userName, "poppins-medium")}>
                {comm.user_id === currentUser.id
                  ? "YOU"
                  : "USER" + comm.user_show_id}
              </p>
              <span className={cn(styles.comment, "poppins-regular")}>
                {comm.comment}
              </span>
              <div className={styles.actions}>
                <span className={cn(styles.createdAt, "poppins-regular")}>
                  {new Date(comm.createdAt).toLocaleDateString()}
                </span>
                {comm.user_id === currentUser.id && (
                  <button
                    onClick={() => deleteCommentById(comm.id)}
                    className={cn(styles.delete, "poppins-regular")}
                  >
                    <img src={deleteSvg} alt="delete" />
                  </button>
                )}
              </div>
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
