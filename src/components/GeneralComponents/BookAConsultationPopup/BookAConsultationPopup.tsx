import ConsultationForm from "./ConsultationForm";

import styles from "./BookAConsultationPopup.module.css";
import { useState } from "react";
import MessageSent from "./MessageSent";

interface BookAConsultationPopupProps {
  onClose: () => void;
}

export const BookAConsultationPopup = ({
  onClose,
}: BookAConsultationPopupProps) => {
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = () => {
    setIsSent(true);
  };

  return (
    <div className={styles.bookAConsultationPopup}>
      {!isSent ? (
        <ConsultationForm handleSendMessage={handleSendMessage} />
      ) : (
        <MessageSent onClose={onClose} />
      )}
    </div>
  );
};
