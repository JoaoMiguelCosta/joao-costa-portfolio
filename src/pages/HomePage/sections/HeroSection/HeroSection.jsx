import Container from "../../../../shared/ui/Container/Container.jsx";

import styles from "./HeroSection.module.css";

const actionClassByVariant = {
  primary: styles.primaryAction,
  secondary: styles.secondaryAction,
};

function getActionClassName(variant) {
  return actionClassByVariant[variant] ?? styles.secondaryAction;
}

export default function HeroSection({ content }) {
  return (
    <section className={styles.hero} id="inicio" aria-labelledby="hero-title">
      <Container>
        <div className={styles.content}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>

          <h1 className={styles.title} id="hero-title">
            {content.title}
          </h1>

          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            {content.actions.map((action) => (
              <a
                className={getActionClassName(action.variant)}
                href={action.href}
                key={action.href}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
