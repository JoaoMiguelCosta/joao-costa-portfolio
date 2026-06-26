import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import styles from "./AboutSection.module.css";

export default function AboutSection({ content }) {
  return (
    <section
      className={styles.section}
      id="sobre"
      aria-labelledby="about-title"
    >
      <Container>
        <div className={styles.content}>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            titleId="about-title"
          />

          <div className={styles.paragraphs}>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
