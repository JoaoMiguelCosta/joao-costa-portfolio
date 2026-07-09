import Container from "../../../../shared/ui/Container/Container.jsx";
import IconFrame from "../../../../shared/ui/IconFrame/IconFrame.jsx";
import SectionHeader from "../../../../shared/ui/SectionHeader/SectionHeader.jsx";

import styles from "./AboutSection.module.css";

export default function AboutSection({ content }) {
  const education = content.education;

  return (
    <section
      className={styles.section}
      id={content.sectionId}
      aria-labelledby="about-title"
    >
      <Container>
        <div className={styles.layout}>
          <div className={styles.imageFrame}>
            <img
              className={styles.image}
              src={content.profileImage.src}
              alt={content.profileImage.alt}
              width={content.profileImage.width}
              height={content.profileImage.height}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className={styles.intro}>
            <div className={styles.sectionHeader}>
              <SectionHeader
                eyebrow={content.eyebrow}
                title={content.title}
                titleId="about-title"
                description={content.description}
              />
            </div>

            <div className={styles.paragraphs}>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <dl className={styles.facts}>
            {content.facts.map((fact) => (
              <div className={styles.fact} key={fact.id}>
                <dt className={styles.factLabel}>{fact.label}</dt>
                <dd className={styles.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>

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
                <IconFrame src={education.certificate.icon} size={20} />

                <span>{education.certificate.label}</span>
              </a>
            </article>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
