import { useState } from "react";
import Button from "../../../../shared/Button";
import Title from "../../../../shared/Title";
import cn from "classnames";
import styles from "./ConsultationForm.module.css";
import { validate } from "./helpers/formValidation";
import type { ConsultationFormProps, IForm } from "./types/model";

export const ConsultationForm = ({
  handleSendMessage,
}: ConsultationFormProps) => {
  const [form, setForm] = useState<IForm>({
    email: "",
    phone: "",
    name: "",
  });

  const [errors, setErrors] = useState<IForm>({
    email: "",
    phone: "",
    name: "",
  });

  const handleSetErrors = (newErrors: IForm) => {
    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));

    if (e.target.name === "phone") {
      let val = e.target.value;
      if (val.startsWith("+")) {
        val = "+" + val.slice(1).replace(/\D/g, "");
      } else {
        val = val.replace(/\D/g, "");
      }
      setForm((prev) => ({ ...prev, phone: val }));
    }

    if (e.target.name === "name") {
      const cleaned = e.target.value.replace(/[^A-Za-z\s-]/g, "");
      setForm((prev) => ({ ...prev, name: cleaned }));
    }
  };

  const handleSubmit = () => {
    if (validate(form, handleSetErrors)) {
      handleSendMessage(form);
      setForm({ email: "", phone: "", name: "" });
    }
  };

  return (
    <div className={styles.consultationFormWrapper}>
      <Title
        text="Let's Book Your Consultation"
        font="fjalla-one-regular"
        className="title_20"
      />
      <span className={cn(styles.description, "poppins-regular")}>
        Leave your phone and email — we'll reach out shortly to schedule the
        perfect time for you.
      </span>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.inputs}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
              className={cn(
                styles.emailInput,
                styles.input,
                "poppins-regular",
                {
                  [styles.errorInput]: errors.email,
                }
              )}
            />
            {errors.email && (
              <span className={cn(styles.error, "poppins-regular")}>
                {errors.email}
              </span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="phone"
              value={form.phone}
              placeholder="Phone"
              onChange={handleChange}
              className={cn(
                styles.phoneInput,
                styles.input,
                "poppins-regular",
                {
                  [styles.errorInput]: errors.phone,
                }
              )}
            />
            {errors.phone && (
              <span className={cn(styles.error, "poppins-regular")}>
                {errors.phone}
              </span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Full name"
              onChange={handleChange}
              className={cn(styles.nameInput, styles.input, "poppins-regular", {
                [styles.errorInput]: errors.name,
              })}
            />
            {errors.name && (
              <span className={cn(styles.error, "poppins-regular")}>
                {errors.name}
              </span>
            )}
          </div>
        </div>

        <Button
          content="Send"
          className="button_light_transparent"
          handleClick={handleSubmit}
          font="poppins-medium"
        />
      </form>
    </div>
  );
};
