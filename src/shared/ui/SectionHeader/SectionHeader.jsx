import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  eyebrow,
  title,
  titleId,
  description,
  eyebrowAccent = false,
}) {
  const eyebrowClassName = [
    styles.eyebrow,
    "u-eyebrow",
    eyebrowAccent ? "u-eyebrow-accent" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={styles.header}>
      {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}

      <h2 className={styles.title} id={titleId}>
        {title}
      </h2>

      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}
