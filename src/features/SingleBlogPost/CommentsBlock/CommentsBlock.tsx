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
}

export const CommentsBlock = ({ blogId, comments }: CommentsBlockProps) => {
  const { control, handleSubmit, reset } = useForm<Form>({
    defaultValues: {
      comment: "",
    },
  });

  const handleAddComment = (data: Form) => {
    addComment(data.comment, blogId);
    reset();

    // stex zaprosa petq vor ga nor comment@
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
