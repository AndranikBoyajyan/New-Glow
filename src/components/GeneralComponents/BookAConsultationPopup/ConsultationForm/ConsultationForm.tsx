import Button from "../../../../shared/Button";
import Title from "../../../../shared/Title";
import cn from "classnames";

import styles from "./ConsultationForm.module.css";

interface ConsultationFormProps {
  handleSendMessage: () => void;
}

export const ConsultationForm = ({
  handleSendMessage,
}: ConsultationFormProps) => {
  return (
    <div className={styles.consultationFormWrapper}>
      <Title
        text="Let's Book Your Consultation"
        font="fjalla-one-regular"
        className="title_20"
      />
      <span className={cn(styles.description, "poppins-regular")}>
        Leave your phone and email We'll reach out shortly to schedule the
        perfect time for you.
      </span>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <input
            type="email"
            placeholder="Email"
            className={cn(styles.emailInput, styles.input, "poppins-regular")}
          />
          <input
            type="text"
            placeholder="Phone"
            className={cn(styles.phoneInput, styles.input, "poppins-regular")}
          />
          <input
            type="text"
            placeholder="Full name"
            className={cn(styles.nameInput, styles.input, "poppins-regular")}
          />
        </div>
        <Button
          content="Send"
          className="button_light_transparent"
          handleClick={handleSendMessage}
          font="poppins-medium"
        />
      </form>
    </div>
  );
};
