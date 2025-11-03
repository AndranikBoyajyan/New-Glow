import { useEffect, useRef, type ReactNode } from "react";
import cn from "classnames";
import { createPortal } from "react-dom";

import styles from "./Dialog.module.css";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
  contentClassName?: string;
  title?: string;
}

export const Dialog = ({
  open,
  onClose,
  title,
  contentClassName,
  children,
}: ModalProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    const related = e.relatedTarget as Node | null;
    if (contentRef.current && !contentRef.current.contains(related)) {
      // onClose();
    }
  };

  if (!open) return null;

  return createPortal(
    <div className={styles.modalOverlay}>
      <div
        className={cn(styles.modalContent, styles[contentClassName ?? ""])}
        ref={contentRef}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        onBlur={handleBlur}
      >
        {title && (
          <h2 className={cn(styles.modalTitle, "poppins-regular")}>{title}</h2>
        )}

        <div className={styles.modalBody}>{children}</div>

        <button onClick={onClose} className={styles.modalClose}>
          ✕
        </button>
      </div>
    </div>,
    document.body
  );
};
