import type { FC } from "react";
import cn from "classnames";
import styles from "./SingleTreatmentWhenBlock.module.css";
import type { IAnswer } from "../../components/TreatmentsContainers/types/model";

interface SingleTreatmentWhenBlockProps {
  question: string;
  imgUrl: string;
  answers: IAnswer[];
}

export const SingleTreatmentWhenBlock: FC<SingleTreatmentWhenBlockProps> = ({
  question,
  answers,
  imgUrl,
}) => {
  return (
    <div className={styles.WhenBlock}>
      <div className={styles.WhenBlockQuestionWrapper}>
        <span
          className={cn(styles.WhenBlockQuestionText, "fjalla-one-regular")}
        >
          {question}
        </span>
        {answers.map((answer, index) => (
          <div
            key={answer.answer + index}
            className={styles.whenBlockAnswersWithIcon}
          >
            <img src="/pngs/checkMark.png" alt="" width={41} />
            <div className={styles.whenBlockAnswers}>
              <span className={cn(styles.answer, "poppins-semibold")}>
                {answer.answer}
              </span>
              <span className={cn(styles.answerDescription, "poppins-regular")}>
                {answer.answerDescription}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className={styles.whenBlockImg}
      ></div>
    </div>
  );
};
