export interface IForm {
  email: string;
  phone: string;
  name: string;
}
export interface ConsultationFormProps {
  handleSendMessage: (data: IForm) => void;
}
