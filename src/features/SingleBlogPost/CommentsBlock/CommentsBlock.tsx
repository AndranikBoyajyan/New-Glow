import Button from "../../../shared/Button";
import cn from "classnames";
import Title from "../../../shared/Title";
import type { Comment, Form } from "../model";
import { addComment } from "../service/addComment";

import styles from "./CommentsBlock.module.css";
import { Controller, useForm } from "react-hook-form";

interface CommentsBlockProps {
  blogId: number;
  comments: Comment[];
  getComments: () => Promise<void>;
}

export const CommentsBlock = ({
  blogId,
  comments,
  getComments,
}: CommentsBlockProps) => {
  const { control, handleSubmit, reset } = useForm<Form>({
    defaultValues: {
      comment: "",
    },
  });

  const handleAddComment = async (data: Form) => {
    console.log("start");

    await addComment(data.comment, blogId);
    reset();

    // es moment@ chjogi vonc lav arji anel karoxa WS kpcnem?
    // vor uxarkeluc miangamic ereva
    await getComments();
  };

  return (
    <div className={styles.comments}>
      <Title text="Comments" font="fjalla-one-regular" />
      <div className={styles.content}>
        <div className={styles.commentsWrapper}>
          {comments.map((comm) => (
            <div className={styles.commentBlock} key={comm.id}>
              <h3 className={cn(styles.userName, "poppins-medium")}>
                USER{comm.user_id}
              </h3>
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
                <input onBlur={onBlur} onChange={onChange} value={value} />
              );
            }}
          />
          <Button
            className="button_send"
            type="submit"
            content=">"
            hookFormClick={handleSubmit(handleAddComment)}
          />
        </form>
      </div>
    </div>
  );
};
