import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
}) {
  return (
    <header className={styles.header}>
      {eyebrow ? (
        <p className={`${styles.eyebrow} u-eyebrow`}>{eyebrow}</p>
      ) : null}

      <h2 className={styles.title} id={titleId}>
        {title}
      </h2>

      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
