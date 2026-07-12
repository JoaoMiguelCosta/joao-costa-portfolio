import { useEffect, useId, useRef, useState } from "react";

import styles from "./DemoAccessModal.module.css";

const COPY_FEEDBACK_DURATION_MS = 2000;

function CredentialRow({
  label,
  value,
  isCopied,
  copyLabel,
  copiedLabel,
  copyAriaLabel,
  onCopy,
}) {
  return (
    <div className={styles.credentialRow}>
      <div className={styles.credentialText}>
        <span className={styles.credentialLabel}>{label}</span>
        <span className={styles.credentialValue}>{value}</span>
      </div>

      <button
        type="button"
        className={styles.copyButton}
        onClick={onCopy}
        aria-label={copyAriaLabel}
      >
        {isCopied ? copiedLabel : copyLabel}
      </button>
    </div>
  );
}

export default function DemoAccessModal({ open, onClose, demoUrl, accounts, labels }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  const [copiedFieldId, setCopiedFieldId] = useState(null);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
      closeButtonRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!copiedFieldId) {
      return;
    }

    const timer = setTimeout(
      () => setCopiedFieldId(null),
      COPY_FEEDBACK_DURATION_MS,
    );

    return () => clearTimeout(timer);
  }, [copiedFieldId]);

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      onClose();
    }
  }

  function handleCopy(fieldId, value, fieldLabel, accountName) {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedFieldId(fieldId);
      setLiveMessage(`${labels.copiedLabel}: ${fieldLabel} — ${accountName}`);
    });
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <div className={styles.panel}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title} id={titleId}>
              {labels.title}
            </h2>

            <p className={styles.description} id={descriptionId}>
              {labels.description}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label={labels.closeLabel}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className={styles.accounts}>
          {accounts.map((account) => (
            <section
              className={styles.account}
              key={account.id}
              aria-label={account.name}
            >
              <h3 className={styles.accountTitle}>{account.name}</h3>

              <div className={styles.credentials}>
                <CredentialRow
                  label={labels.usernameLabel}
                  value={account.username}
                  isCopied={copiedFieldId === `${account.id}-username`}
                  copyLabel={labels.copyLabel}
                  copiedLabel={labels.copiedLabel}
                  copyAriaLabel={`${labels.copyLabel} ${labels.usernameLabel} — ${account.name}`}
                  onCopy={() =>
                    handleCopy(
                      `${account.id}-username`,
                      account.username,
                      labels.usernameLabel,
                      account.name,
                    )
                  }
                />

                <CredentialRow
                  label={labels.passwordLabel}
                  value={account.password}
                  isCopied={copiedFieldId === `${account.id}-password`}
                  copyLabel={labels.copyLabel}
                  copiedLabel={labels.copiedLabel}
                  copyAriaLabel={`${labels.copyLabel} ${labels.passwordLabel} — ${account.name}`}
                  onCopy={() =>
                    handleCopy(
                      `${account.id}-password`,
                      account.password,
                      labels.passwordLabel,
                      account.name,
                    )
                  }
                />
              </div>
            </section>
          ))}
        </div>

        <p className={styles.note}>{labels.note}</p>

        <p className={styles.srOnly} aria-live="polite">
          {liveMessage}
        </p>

        <footer className={styles.actions}>
          <a
            className={styles.openDemo}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {labels.openDemoLabel}
          </a>

          <button type="button" className={styles.closeAction} onClick={onClose}>
            {labels.closeLabel}
          </button>
        </footer>
      </div>
    </dialog>
  );
}
