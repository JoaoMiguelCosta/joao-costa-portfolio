import Container from "../Container/Container.jsx";

import styles from "./FeedbackPage.module.css";

export default function FeedbackPage({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref = "/",
  titleId,
}) {
  return (
    <Container>
      <div className={styles.content}>
        <p className="u-eyebrow">{eyebrow}</p>

        <h1 className={styles.title} id={titleId}>
          {title}
        </h1>

        <p className={styles.description}>{description}</p>

        <a className={styles.action} href={actionHref}>
          {actionLabel}
        </a>
      </div>
    </Container>
  );
}
