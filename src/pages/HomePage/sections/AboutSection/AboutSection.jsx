import Container from "../../../../shared/ui/Container/Container.jsx";
import ScrollReveal from "../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import SectionHeader from "../../../../shared/ui/SectionHeader/SectionHeader.jsx";

import AboutEducation from "./components/AboutEducation/AboutEducation.jsx";

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
            <ScrollReveal className={styles.sectionHeader}>
              <SectionHeader
                eyebrow={content.eyebrow}
                title={content.title}
                titleId="about-title"
                description={content.description}
                eyebrowAccent
              />
            </ScrollReveal>

            <ScrollReveal className={styles.paragraphs} delay={80}>
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </ScrollReveal>
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
            <AboutEducation education={education} className={styles.education} />
          ) : null}
        </div>
      </Container>
    </section>
  );
}
