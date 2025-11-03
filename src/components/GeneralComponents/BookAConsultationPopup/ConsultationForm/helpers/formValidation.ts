import type { IForm } from "../types/model";

export const validate = (
  form: IForm,
  handleSetErrors: (errors: IForm) => void
) => {
  const newErrors: IForm = { email: "", phone: "", name: "" };
  let isValid = true;

  if (!form.email.trim()) {
    newErrors.email = "Email is required";
    isValid = false;
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
  ) {
    newErrors.email = "Invalid email format";
    isValid = false;
  }

  if (!form.phone.trim()) {
    newErrors.phone = "Phone is required";
    isValid = false;
  } else if (!/^\+?\d{7,15}$/.test(form.phone)) {
    newErrors.phone = "Invalid phone number";
    isValid = false;
  }

  if (!form.name.trim()) {
    newErrors.name = "Full name is required";
    isValid = false;
  } else if (form.name.trim().length < 2) {
    newErrors.name = "Name must be at least 2 characters";
    isValid = false;
  } else if (!/^[a-zA-Z ]+$/.test(form.name)) {
    newErrors.name = "Invalid name format";
    isValid = false;
  }

  handleSetErrors(newErrors);
  return isValid;
};
