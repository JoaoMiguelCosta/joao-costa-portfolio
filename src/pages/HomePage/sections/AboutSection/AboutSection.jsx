import Container from "../../../../shared/ui/Container/Container.jsx";
import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";

import styles from "./AboutSection.module.css";

export default function AboutSection({ content }) {
  const education = content.education;

  return (
    <section
      className={styles.section}
      id="sobre"
      aria-labelledby="about-title"
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.media}>
            <img
              className={styles.image}
              src={content.profileImage.src}
              alt={content.profileImage.alt}
              width={content.profileImage.width}
              height={content.profileImage.height}
              loading="lazy"
              decoding="async"
            />

            <dl className={styles.facts}>
              {content.facts.map((fact) => (
                <div className={styles.fact} key={fact.id}>
                  <dt className={styles.factLabel}>{fact.label}</dt>
                  <dd className={styles.factValue}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.content}>
            <SectionHeader
              eyebrow={content.eyebrow}
              title={content.title}
              titleId="about-title"
              description={content.description}
            />

            <div className={styles.paragraphs}>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {education ? (
              <article
                className={styles.education}
                aria-labelledby="about-education-title"
              >
                <p className={styles.educationEyebrow}>{education.eyebrow}</p>

                <div className={styles.educationHeader}>
                  <div>
                    <h3
                      className={styles.educationTitle}
                      id="about-education-title"
                    >
                      {education.title}
                    </h3>

                    <p className={styles.educationMeta}>
                      {education.institution}
                    </p>
                  </div>

                  <span className={styles.educationPeriod}>
                    {education.period}
                  </span>
                </div>

                <p className={styles.educationDescription}>
                  {education.description}
                </p>

                <a
                  className={styles.educationLink}
                  href={education.certificate.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={education.certificate.ariaLabel}
                >
                  {education.certificate.label}
                </a>
              </article>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
