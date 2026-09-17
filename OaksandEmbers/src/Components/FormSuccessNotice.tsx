import { useEffect } from "react";

const notificationDuration = 5000;

interface FormSuccessNoticeProps {
  title: string;
  message: string;
  onDismiss: () => void;
}

export const FormSuccessNotice = ({
  title,
  message,
  onDismiss,
}: FormSuccessNoticeProps) => {
  useEffect(() => {
    const timeoutId = window.setTimeout(onDismiss, notificationDuration);

    return () => window.clearTimeout(timeoutId);
  }, [onDismiss]);

  return (
    <div
      className="form-success-message"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="form-success-message__icon" aria-hidden="true">
        &#10003;
      </span>
      <span className="form-success-message__copy">
        <strong>{title}</strong>
        <small>{message}</small>
      </span>
      <button
        className="form-success-message__close"
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss notification"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
