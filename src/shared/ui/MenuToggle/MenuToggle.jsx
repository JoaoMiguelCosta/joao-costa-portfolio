import styles from "./MenuToggle.module.css";

export default function MenuToggle({
  isOpen,
  controlsId,
  openLabel,
  closeLabel,
  onToggle,
  triggerRef,
}) {
  const accessibleLabel = isOpen ? closeLabel : openLabel;

  return (
    <button
      ref={triggerRef}
      className={styles.button}
      type="button"
      aria-label={accessibleLabel}
      aria-controls={controlsId}
      aria-expanded={isOpen}
      title={accessibleLabel}
      onClick={onToggle}
    >
      <span className={styles.icon} aria-hidden="true" />
    </button>
  );
}
