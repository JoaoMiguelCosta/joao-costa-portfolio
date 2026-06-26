import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import styles from "./ContactSection.module.css";

export default function ContactSection({ content }) {
  return (
    <section
      className={styles.section}
      id="contacto"
      aria-labelledby="contact-title"
    >
      <Container>
        <div className={styles.content}>
          <SectionHeader
            eyebrow={content.eyebrow}
            title={content.title}
            titleId="contact-title"
          />

          <p className={styles.description}>{content.description}</p>
          <p className={styles.note}>{content.note}</p>
        </div>
      </Container>
    </section>
  );
}
