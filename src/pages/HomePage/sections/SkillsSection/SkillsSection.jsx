import Container from "../../../../shared/ui/Container/Container.jsx";
import ScrollReveal from "../../../../shared/ui/ScrollReveal/ScrollReveal.jsx";
import SectionHeader from "../../../../shared/ui/SectionHeader/SectionHeader.jsx";

import SkillCard from "./components/SkillCard/SkillCard.jsx";

import styles from "./SkillsSection.module.css";

export default function SkillsSection({ content }) {
  return (
    <section
      className={styles.section}
      id={content.sectionId}
      aria-labelledby="skills-title"
    >
      <Container>
        <div className={styles.inner}>
          <ScrollReveal className={styles.sectionHeader}>
            <SectionHeader
              eyebrow={content.eyebrow}
              title={content.title}
              titleId="skills-title"
              description={content.description}
              eyebrowAccent
            />
          </ScrollReveal>

          <div className={styles.groups}>
            <ScrollReveal as="section" aria-labelledby="applied-skills-title" delay={80}>
              <div className={styles.groupHeader}>
                <h3 className={styles.groupTitle} id="applied-skills-title">
                  {content.appliedTitle}
                </h3>

                <p className={styles.groupDescription}>
                  {content.appliedDescription}
                </p>
              </div>

              <div className={styles.appliedGrid}>
                {content.appliedItems.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    labels={content.labels}
                  />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal as="section" aria-labelledby="learning-skills-title" delay={160}>
              <div className={styles.groupHeader}>
                <h3 className={styles.groupTitle} id="learning-skills-title">
                  {content.learningTitle}
                </h3>

                <p className={styles.groupDescription}>
                  {content.learningDescription}
                </p>
              </div>

              <div className={styles.learningGrid}>
                {content.learningItems.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    labels={content.labels}
                    variant="learning"
                  />
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
